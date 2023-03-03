import server from '@starting-again/web-common/src/build-prod-server';

server(['VITE_API_URL', 'VITE_MSAL_CLIENT_ID', 'VITE_MSAL_AUTHORITY']);
