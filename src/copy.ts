/**
 * Copy text to the clipboard
 * @param {any} text - The text to copy
 * @returns {void}
 */
export function copy(text: any): void {
	if (navigator && navigator.clipboard) {
		navigator.clipboard.writeText(text);
	} else {
		const input = document.createElement('input');
		document.body.appendChild(input);
		input.value = text;
		input.select();
		document.execCommand('copy');
		document.body.removeChild(input);
	}
}
