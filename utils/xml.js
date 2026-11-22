const XML_ESCAPE = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', '\'': '&apos;' };
const escapeXml = str => str.replace(/[&<>"']/g, ch => XML_ESCAPE[ch]);

const normalizeUrl = url => {
	const parsedUrl = new URL(url);
	parsedUrl.hash = '';
	return parsedUrl.toString();
};

export { escapeXml, normalizeUrl };
