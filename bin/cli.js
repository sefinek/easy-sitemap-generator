#!/usr/bin/env node

const { logError } = require('../utils/kleur.js');
const { generate } = require('../lib/sitemapGenerator');

const args = process.argv.slice(2);
const urlArg = args.find(arg => arg.startsWith('--domain='));
if (!urlArg) {
	logError('No URL provided. Use: sitemap-generator --domain=<YOUR-DOMAIN>');
	process.exit(1);
}

generate(urlArg.split('=')[1]).catch(err => {
	logError(err);
	process.exit(2);
});