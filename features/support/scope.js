const puppeteer = require('puppeteer');

const scope = {
  driver: puppeteer,
  browser: null,
  page: null,
};

module.exports = scope;
