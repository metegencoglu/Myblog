// Node wrapper to run Vite build and ensure errors print to terminal
const { build } = require('vite');

(async () => {
  try {
    console.log('Starting Vite build...');
    await build();
    console.log('Vite build completed successfully.');
    process.exit(0);
  } catch (err) {
    console.error('Vite build failed:');
    if (err && err.stack) console.error(err.stack);
    else console.error(err);
    process.exit(1);
  }
})();
