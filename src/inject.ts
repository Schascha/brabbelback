/**
 * Injects a script into the document body
 * @param {string} src - The src of the script to inject
 * @returns {Promise} A promise that resolves when the script has been injected
 */

export function injectScript(src: string): Promise<any> {
	return new Promise((resolve, reject) => {
		if (document.querySelector(`script[src="${src}"]`)) {
			return resolve;
		}
		const script = document.createElement('script');
		script.type = 'text/javascript';
		script.async = true;
		script.defer = true;
		script.src = src;
		script.onload = resolve;
		script.onerror = (e) => reject(e);
		document.body.appendChild(script);
	});
}
