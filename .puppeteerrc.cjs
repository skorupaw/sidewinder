const { join } = require('path');

/**
 * @type {import("puppeteer").Configuration}
 */
module.exports = {
  "chrome-headless-shell": true,
  firefox: false,
  // Changes the cache location for Puppeteer.
  cacheDirectory: join(__dirname, '.cache', 'puppeteer'),
};
