import { escapeXml, normalizeUrl, calculatePriority } from '../utils/xml.js';

describe('escapeXml', () => {
	test('escapes special characters', () => {
		expect(escapeXml('<a href="test">A & B\'s</a>')).toBe('&lt;a href=&quot;test&quot;&gt;A &amp; B&apos;s&lt;/a&gt;');
	});

	test('leaves plain text unchanged', () => {
		expect(escapeXml('hello world')).toBe('hello world');
	});
});

describe('normalizeUrl', () => {
	test('removes the hash fragment', () => {
		expect(normalizeUrl('https://example.com/page#section')).toBe('https://example.com/page');
	});

	test('leaves urls without a hash unchanged', () => {
		expect(normalizeUrl('https://example.com/page')).toBe('https://example.com/page');
	});
});

describe('calculatePriority', () => {
	const baseUrl = 'https://example.com';

	test('returns 1.0 for the root', () => {
		expect(calculatePriority('https://example.com/', baseUrl)).toBe(1.0);
	});

	test('returns 0.85 for top-level pages', () => {
		expect(calculatePriority('https://example.com/about', baseUrl)).toBe(0.85);
	});

	test('returns 0.74 for second-level pages without a query', () => {
		expect(calculatePriority('https://example.com/blog/post-1', baseUrl)).toBe(0.74);
	});

	test('returns 0.54 for second-level pages with a query', () => {
		expect(calculatePriority('https://example.com/blog/post-1?page=2', baseUrl)).toBe(0.54);
	});

	test('returns 0.44 for deeper pages without a query', () => {
		expect(calculatePriority('https://example.com/blog/2024/post-1', baseUrl)).toBe(0.44);
	});

	test('returns 0.34 for deeper pages with a query', () => {
		expect(calculatePriority('https://example.com/blog/2024/post-1?page=2', baseUrl)).toBe(0.34);
	});
});
