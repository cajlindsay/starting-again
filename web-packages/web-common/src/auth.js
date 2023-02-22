import * as msal from '@azure/msal-browser';

const { VITE_MSAL_CLIENT_ID, VITE_MSAL_AUTHORITY } = import.meta.env;

const msalInstance = new msal.PublicClientApplication({
  auth: {
    clientId: VITE_MSAL_CLIENT_ID,
    authority: VITE_MSAL_AUTHORITY
  }
});

export async function init() {
  await msalInstance.handleRedirectPromise();
  await getBearerToken();
}

export async function getBearerToken() {
  const account = msalInstance.getAllAccounts()[0];
  
  if (!account) {
    await msalInstance.loginRedirect();
    return;
  }

  const accessTokenRequest = {
    scopes: ['openid', 'profile'],
    account: account
  };

  try {
    const authResult = await msalInstance.acquireTokenSilent(accessTokenRequest);

    return authResult.idToken;
  } catch (error) {
    if (error instanceof msal.InteractionRequiredAuthError) {
      msalInstance.acquireTokenRedirect(accessTokenRequest);
    }

    throw error;
  }
}

export function logOut() {
  msalInstance.logoutRedirect();
}
