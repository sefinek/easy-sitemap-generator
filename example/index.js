const sitemap = require('../lib/sitemapGenerator.js');

(async () => {
	const content = await sitemap.generate('https://sefinek.net');
	console.log(content);
	console.log('Module version:', sitemap.version);
})();