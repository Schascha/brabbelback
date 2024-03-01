
export function injectScript(src) {
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
