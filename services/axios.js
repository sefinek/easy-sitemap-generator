const axios = require('axios');
const { version } = require('../package.json');

axios.defaults.headers.common['User-Agent'] = `Mozilla/5.0 (compatible; EasySitemapGen/${version}; +https://github.com/sefinek/easy-sitemap-generator)`;
axios.defaults.timeout = 24000;

module.exports = { axios, version };