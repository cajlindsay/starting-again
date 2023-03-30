function apiConfig(app, port) {
  return {
    name: app,
    script: 'vite --config ../../_config-vite/vite.node.config.js',
    interpreter: 'none',
    cwd: `apis/${app}`,
    env: {
      PORT: port,
      MSAL_TENANT_URL: 'https://login.microsoftonline.com/consumers',
      MSAL_CLIENT_ID: 'ef0f1a58-5d27-48f4-a47d-043df4ea4c3f',
      MSAL_CLIENT_SECRET: 'HqN8Q~uAE.yQED1eb-2k_bnVXjCNwqojugqfFaSp',
      MONGO_INITDB_ROOT_USERNAME: 'B49B817164814B2BBDCCC0C5674BFDB3',
      MONGO_INITDB_ROOT_PASSWORD:
        'DBD2ED7937D44982A483243E1C49995E95F147A3F0A94997A13288A9C6F7377DB4E1BFAAACB44F2285517816A8222B576',
      MONGO_DATABASE: 'starting-again',
      MONGO_SERVER: 'localhost',
      MONGO_PORT: '27017'
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
  apps: [
    apiConfig('api-1', 3000),
    apiConfig('api-2', 3001),
    apiConfig('graphql-server', 3002),
    webConfig('web-1', 5173),
    webConfig('web-2', 5174),
    webConfig('web-ts-graphql', 5175)
  ]
};
