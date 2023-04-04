module.exports = {
  apps: [{
    name: "server",
    script: "./server/server.js",
    watch: true,
    exec_mode: "cluster",
    instances: "1", // Reduce the number of instances
    // max_memory_restart: '1G',
    env: {
      NODE_ENV: "development" // Combine env properties
    },
    env_production: {
      NODE_ENV: "production"
    }
  }]
}
