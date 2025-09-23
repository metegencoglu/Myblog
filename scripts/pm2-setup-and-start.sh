#!/usr/bin/env bash
set -euo pipefail

echo "pm2 setup + start script"
echo "This script installs Node (if missing), installs pm2, installs project dependencies, starts the app via pm2 and registers pm2 to start on boot."

if [ "$(id -u)" -eq 0 ]; then
  echo "Warning: it's better to run this script as a regular user (e.g. ubuntu) who owns the project files. Some commands will use sudo when needed."
fi

# Helper: run and show
run() { echo "+ $*"; "$@"; }

# 1) Check node/npm
if ! command -v node >/dev/null 2>&1; then
  echo "node not found. Installing Node.js 18 (via NodeSource)..."
  run sudo apt-get update
  run sudo apt-get install -y curl ca-certificates
  run curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
  run sudo apt-get install -y nodejs
fi

echo "Node version: $(node -v)"
echo "NPM version: $(npm -v)"

# 2) Install PM2 globally (use unsafe-perm to avoid permission issues under sudo)
if ! command -v pm2 >/dev/null 2>&1; then
  echo "Installing pm2 globally..."
  # prefer sudo install globally
  run sudo npm install -g pm2 --unsafe-perm=true --allow-root
else
  echo "pm2 already installed: $(pm2 -v)"
fi

# 3) cd to project dir (script assumes it is run from project root or adjust PROJECT_DIR)
PROJECT_DIR="$(pwd)"
echo "Using project dir: $PROJECT_DIR"

if [ ! -f "$PROJECT_DIR/server/index.js" ]; then
  echo "Error: server/index.js not found in $PROJECT_DIR. Please run this script from the project root or set PROJECT_DIR accordingly." >&2
  exit 1
fi

# 4) Install project dependencies (production)
if [ -f package-lock.json ] || [ -f package.json ]; then
  echo "Installing project dependencies (production)..."
  run npm install --production
else
  echo "No package.json found in $PROJECT_DIR. Skipping npm install.";
fi

# 5) Start the app with pm2 using ecosystem.config.js if present
if [ -f "$PROJECT_DIR/ecosystem.config.js" ]; then
  echo "Starting application with pm2 (ecosystem.config.js)..."
  run pm2 start ecosystem.config.js --env production || pm2 reload ecosystem.config.js --env production
else
  echo "ecosystem.config.js not found. Falling back to starting server/index.js as 'email-api'"
  run pm2 start server/index.js --name email-api --env production
fi

echo "pm2 list:"
pm2 list

# 6) Register pm2 startup
echo "Registering pm2 to restart on boot..."
STARTUP_CMD=$(pm2 startup systemd -u "$USER" --hp "$HOME" | sed -n 's/.*\(sudo .*\)/\1/p') || true
if [ -n "$STARTUP_CMD" ]; then
  echo "Running startup command: $STARTUP_CMD"
  eval $STARTUP_CMD
else
  echo "Could not extract the startup command automatically. Run 'pm2 startup' manually and follow instructions." >&2
fi

echo "Saving current pm2 process list..."
run pm2 save

echo "Done. To view logs: pm2 logs email-api  (or pm2 logs)"
echo "If you have sudo prompts, run the script without root where sensible (sudo is used internally)."
