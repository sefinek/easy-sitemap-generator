# 🗺️ Easy Sitemap.xml generator
A free and easy-to-use `sitemap.xml` generator with no restrictions for your website.
Improve your search engine rankings effortlessly! All you need is Node.js installed and this module.

<a href="https://www.npmjs.com/package/easy-sitemap-generator" target="_blank" title="easy-sitemap-generator - npm" style="text-decoration:none">
    <img src="https://img.shields.io/npm/dt/easy-sitemap-generator.svg?maxAge=3600" alt="The number of downloads">
    <img src="https://img.shields.io/github/issues/sefinek/easy-sitemap-generator" alt="Issues">
    <img src="https://img.shields.io/github/last-commit/sefinek/easy-sitemap-generator" alt="Last commit">
    <img src="https://img.shields.io/github/commit-activity/w/sefinek/easy-sitemap-generator" alt="Commit activity">
    <img src="https://img.shields.io/github/languages/code-size/sefinek/easy-sitemap-generator" alt="Code size">
</a>


## 🤔 How to use it?
### CLI (recommenced)
```bash
npm install easy-sitemap-generator -g
sitemap --url=https://example.com
```

#### `--domain`
If you're generating the sitemap from a local server, use `--domain` to replace the crawled host with your production domain in the output:
```bash
sitemap --url=http://localhost:3000 --domain=https://example.com
```

#### `--concurrency`
Controls how many pages are fetched in parallel. Defaults to `3`:
```bash
sitemap --url=https://example.com --concurrency=5
```

#### Aliases
| sitemap-gen | sitemap-generator | generate-sitemap |
|-------------|-------------------|------------------|

### Script
This package is ESM-only.

```js
import { generateSitemap } from 'easy-sitemap-generator';

(async () => {
   const content = await generateSitemap('https://example.com', {
      destination: 'sitemap.xml', // Optional, defaults to './sitemap.xml'
      domain: 'https://example.com', // Optional, replaces the crawled host in the output
      concurrency: 3, // Optional, defaults to 3
   });
   console.log(content);
})();
```


## ✔️ Sample generated file
https://sefinek.net/sitemap.xml


## 👀 Why do I need this?
Indexing bots, such as Google, often check the sitemap.xml file by making a `GET /sitemap.xml` request to find subpages of your website.
This can improve your site’s visibility in search engine results. Sitemap files are a standard feature and can be found on every web server.


## 😉 Important
Before running the script or executing the `sitemap` CLI command, make sure you have a stable internet connection. Also, disconnect from any proxy or VPN if you're connected.


## 📘 License
Licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
