function apiConfig(app, port) {
  return {
    name: app,
    script: 'node-dev -r dotenv/config src/server.js',
    interpreter: 'none',
    cwd: `apis/${app}`,
    env: {
      PORT: port,
      MSAL_TENANT_URL: 'https://login.microsoftonline.com/consumers',
      MSAL_CLIENT_ID: 'ef0f1a58-5d27-48f4-a47d-043df4ea4c3f',
      MSAL_CLIENT_SECRET: 'HqN8Q~uAE.yQED1eb-2k_bnVXjCNwqojugqfFaSp'
    }
  };
}

function webConfig(app, port) {
  return {
    name: app,
    script: 'vite --config ../../_config-vite/vite.web.config.js',
    interpreter: 'none',
    cwd: `webs/${app}`,
    env: {
      PORT: port
    }
  };
}

module.exports = {
  apps: [apiConfig('api-1', 3000), apiConfig('api-2', 3001), webConfig('web-1', 5173), webConfig('web-2', 5174)]
};
