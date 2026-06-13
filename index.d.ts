export interface GenerateOptions {
	/**
	 * Path to save the sitemap file.
	 *
	 * @default ./sitemap.xml
	 */
	destination?: string;

	/** Domain to use in the generated `<loc>` URLs instead of `url`. Useful when crawling a local server but publishing under a different domain. */
	domain?: string;

	/**
	 * Number of pages to fetch in parallel.
	 *
	 * @default 3
	 */
	concurrency?: number;
}

/**
 * Generates a sitemap for the given URL and saves it to a file.
 *
 * @param url - The base URL to generate the sitemap for.
 * @param options - Optional settings for the generated sitemap.
 * @returns A promise that resolves with the contents of the generated sitemap.
 */
export function generateSitemap(url: string, options?: GenerateOptions): Promise<string>;

export const version: string;
