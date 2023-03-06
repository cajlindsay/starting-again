export {};

declare global {
  interface Window {
    env: {
      VITE_API_URL: string;
      VITE_MSAL_CLIENT_ID: string;
      VITE_MSAL_AUTHORITY: string;
    };
  }
}
