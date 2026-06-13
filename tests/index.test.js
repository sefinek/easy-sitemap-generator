import { createRequire } from 'node:module';
import { generateSitemap, version } from '../index.js';

const require = createRequire(import.meta.url);
const { version: pkgVersion } = require('../package.json');

describe('package exports', () => {
	test('generateSitemap is a function', () => {
		expect(typeof generateSitemap).toBe('function');
	});

	test('version matches package.json', () => {
		expect(version).toBe(pkgVersion);
	});
});
