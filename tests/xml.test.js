import { describe, test } from 'node:test';
import assert from 'node:assert/strict';
import { escapeXml, normalizeUrl } from '../utils/xml.js';

describe('escapeXml', () => {
	test('escapes special characters', () => {
		assert.equal(escapeXml('<a href="test">A & B\'s</a>'), '&lt;a href=&quot;test&quot;&gt;A &amp; B&apos;s&lt;/a&gt;');
	});

	test('leaves plain text unchanged', () => {
		assert.equal(escapeXml('hello world'), 'hello world');
	});
});

describe('normalizeUrl', () => {
	test('removes the hash fragment', () => {
		assert.equal(normalizeUrl('https://example.com/page#section'), 'https://example.com/page');
	});

	test('leaves urls without a hash unchanged', () => {
		assert.equal(normalizeUrl('https://example.com/page'), 'https://example.com/page');
	});
});
