import { describe, test } from 'node:test';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { generateSitemap, version } from '../index.js';

const require = createRequire(import.meta.url);
const { version: pkgVersion } = require('../package.json');

describe('package exports', () => {
	test('generateSitemap is a function', () => {
		assert.equal(typeof generateSitemap, 'function');
	});

	test('version matches package.json', () => {
		assert.equal(version, pkgVersion);
	});
});
