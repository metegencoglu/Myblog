
  # Personal Blog Website Design

  This is a code bundle for Personal Blog Website Design. The original project is available at https://www.figma.com/design/xJ1NCkIhBhVVJt74zDEmrz/Personal-Blog-Website-Design.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.
  

## Deploying as a static site

This project builds into a static `build/` folder using Vite. I added a convenience script that runs the build and then uploads the output to your server using scp (PowerShell script).

- Build + deploy (example):

```powershell
npm run deploy -- meteh@1.2.3.4 /var/www/html/site
```

You can also set environment variables instead of passing arguments:

```powershell
$env:DEPLOY_USER = 'meteh'
$env:DEPLOY_HOST = '1.2.3.4'
$env:DEPLOY_PATH = '/var/www/html/site'
npm run deploy
```

Notes:
- The script uses `scp` (OpenSSH). On Windows, make sure the OpenSSH client is installed or use Git Bash / WSL. If `scp` is not available the script will create a zip archive in your TEMP folder that you can upload manually (WinSCP, SFTP).
- For passwordless uploads, configure SSH keys and copy the public key to `~/.ssh/authorized_keys` on the server.

If you want, I can add a GitHub Actions workflow to build and deploy automatically when you push to a branch — tell me if you'd like that.

### Alternatives (quick options)

- GitHub Pages: Free and easy for static sites. Push the `build/` output to the `gh-pages` branch or use a workflow to publish.
- Netlify / Vercel: Automatic builds from GitHub and free tiers available. They handle CDN and compression so your low-RAM server isn't needed.
- rsync over SSH (via WSL on Windows): Efficient incremental uploads for large sites.
- WinSCP GUI or FileZilla: If you prefer a GUI, upload the `build/` folder via SFTP.

Recommendation for low-resource servers:
- Serve the static `build/` directory with Nginx (very low memory footprint). Configure gzip/brotli and appropriate cache headers for assets.
- If you don't want to run a web server, consider deploying to Netlify or GitHub Pages so your server remains idle.
