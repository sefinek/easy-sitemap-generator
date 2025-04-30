/**
 * Generates a sitemap for the given URL and saves it to a file.
 *
 * @param url - The base URL to generate the sitemap for.
 * @param destination - Optional path to save the sitemap file. Defaults to: `./sitemap.xml`
 * @returns A promise that resolves with the contents of the generated sitemap.
 */
export function generate(url: string, destination?: string): Promise<string>;

export const version: string;
