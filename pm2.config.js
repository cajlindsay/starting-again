module.exports = {
  apps: [
    {
      name: 'api-1',
      script: 'apis/api-1/src/server.js',
      watch: [
        'apis/api-1',
        'packages'
      ],
      env: {
        PORT: 3000
      }
    },
    {
      name: 'api-2',
      script: 'apis/api-2/src/server.js',
      watch: [
        'apis/api-2',
        'packages'
      ],
      env: {
        PORT: 3001
      }
    },
    {
      name: 'web-1',
      script: 'npm',
      args: 'start',
      interpreter: 'none',
      cwd: 'webs/web-1',
      env: {
        PORT: 5173
      }
    },
    {
      name: 'web-2',
      script: 'npm',
      args: 'start',
      interpreter: 'none',
      cwd: 'webs/web-2',
      env: {
        PORT: 5174
      }
    }
  ]
};
