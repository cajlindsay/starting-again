function apiConfig(app, port) {
  return {
    name: app,
    script: 'node-dev -r dotenv/config src/server.js dotenv_config_path=config-env/.env',
    interpreter: 'none',
    cwd: `apis/${app}`,
    env: {
      PORT: port
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
