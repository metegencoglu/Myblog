module.exports = {
  apps: [
    {
      name: "email-api",
      script: "server/index.js",
      // Working directory: use project root. When you copy this to the server,
      // ensure the file is placed into the project root (or adjust cwd below).
      cwd: __dirname,
      instances: 1,
      exec_mode: "fork",
      watch: false,
      env: {
        NODE_ENV: "production",
        // set PORT here if your app reads from process.env.PORT
        PORT: 3003
      }
    }
  ]
};
