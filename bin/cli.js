#!/usr/bin/env node

import { parseArgs } from 'node:util';
import { logError } from '../utils/chalk.js';
import { generateSitemap } from '../lib/sitemapGenerator.js';

let values;
try {
	({ values } = parseArgs({
		options: {
			url: { type: 'string' },
			domain: { type: 'string' },
			concurrency: { type: 'string' },
		},
	}));
} catch (err) {
	logError(err.message);
	process.exit(1);
}

if (!values.url) {
	logError('No URL provided. Use: sitemap --url=<YOUR-DOMAIN>');
	process.exit(1);
}

let concurrency;
if (values.concurrency) {
	concurrency = Number(values.concurrency);
	if (!Number.isInteger(concurrency) || concurrency < 1) {
		logError('Invalid --concurrency value. It must be a positive integer.');
		process.exit(1);
	}
}

generateSitemap(values.url, { domain: values.domain, concurrency }).catch(err => {
	logError(err);
	process.exit(2);
});
