module.exports = {
  apps: [
    {
      name: 'email-backend',
      script: './index.js',
      cwd: __dirname,
      env: {
        NODE_ENV: 'production',
        PORT: 3003,
    // Set your SMTP account here or via system env / pm2 startup script
    EMAIL_USER: process.env.EMAIL_USER || 'oguzalpsoft@gmail.com',
    EMAIL_PASS: process.env.EMAIL_PASS || 'tkcquetlboftjpno',
    // Recipient email address
    EMAIL_TO: process.env.EMAIL_TO || 'imgencoglu@gmail.com'
      }
    }
  ]
};
