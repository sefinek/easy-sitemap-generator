const axios = require('axios');
const { version } = require('../package.json');

axios.defaults.timeout = 24000;
axios.defaults.headers.common['User-Agent'] = `Mozilla/5.0 (compatible; EasySitemapGen/${version}; +https://github.com/sefinek/easy-sitemap-generator)`;

module.exports = { axios, version };