import axios from 'axios';
import { createRequire } from 'node:module';

const { version } = createRequire(import.meta.url)('../package.json');

axios.defaults.headers.common['User-Agent'] = `Mozilla/5.0 (compatible; EasySitemapGen/${version}; +https://github.com/sefinek/easy-sitemap-generator)`;
axios.defaults.timeout = 24000;

export { axios, version };
