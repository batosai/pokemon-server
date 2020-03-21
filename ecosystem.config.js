module.exports = {
  apps : [{
    name: 'server',
    script: 'npm',
    args: 'start',

    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '512M',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      user : 'root',
      host : '51.15.201.158',
      ref  : 'origin/master',
      repo : 'git@github.com:batosai/pokemon-server.git',
      path : '/app/server',
      'post-deploy' : 'npm install && npm audit fix && ln -s /app/server/shared/uploads/ /app/server/source/public/uploads && npx pm2 reload ecosystem.config.js --env production'
    }
  }
};
