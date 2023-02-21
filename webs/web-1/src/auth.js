import * as msal from '@azure/msal-browser';

const msalInstance = new msal.PublicClientApplication({
  auth: {
    clientId: 'ef0f1a58-5d27-48f4-a47d-043df4ea4c3f',
    authority: 'https://login.microsoftonline.com/consumers'
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
