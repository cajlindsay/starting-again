const dotenv = require('dotenv'); // eslint-disable-line
const fs = require('fs'); // eslint-disable-line

function apiConfig(app, port) {
  const mongoConfigRaw = fs.readFileSync('./api-packages/db/_config-env/.env');
  const mongoConfig = dotenv.parse(mongoConfigRaw);

  const msalConfigRaw = fs.readFileSync('./api-packages/api-common/_config-env/msal.env');
  const msalConfig = dotenv.parse(msalConfigRaw);

  return {
    name: app,
    script: 'vite --config ../../_config-vite/vite.node.config.js',
    interpreter: 'none',
    cwd: `apis/${app}`,
    env: {
      PORT: port,
      ...msalConfig,
      ...mongoConfig
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
    apiConfig('apollo-server', 3003),
    webConfig('web-1', 5173),
    webConfig('web-2', 5174),
    webConfig('web-ts-graphql', 5175),
    webConfig('web-ts-apollo', 5176)
  ]
};
