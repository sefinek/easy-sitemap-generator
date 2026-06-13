import { generateSitemap, version } from './lib/sitemapGenerator.js';

(async () => {
	const content = await generateSitemap('https://sefinek.net', {
		destination: 'sitemap.xml',
		concurrency: 3,
	});

	console.log(content);
	console.log('Module version:', version);
})();