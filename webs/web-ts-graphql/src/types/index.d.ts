export {};

declare global {
  interface Window {
    env: {
      VITE_API_URL: String;
      VITE_MSAL_CLIENT_ID: String;
      VITE_MSAL_AUTHORITY: String;
    };
  }
}
