# 🗺️ Easy Sitemap.xml generator
Finally! A free and easy-to-use `sitemap.xml` generator with no restrictions for your website.
Improve your search engine rankings effortlessly! All you need is Node.js installed and this module. Good luck!

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

#### Aliases
| sitemap-gen | sitemap-generator | generate-sitemap |
|-------------|-------------------|------------------|

### Script
```js
const sitemap = require('easy-sitemap-generator');

(async () => {
   const content = await sitemap.generate('https://example.com');
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