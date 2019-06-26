module.exports = {
  apps : [{
    name: 'CICD',
    script: './bin/www',
    args: '',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      PORT: 3083,
      NODE_ENV: 'development'
    },
    env_production: {
      PORT: 3083,
      NODE_ENV: 'production'
    }
  }]
};
