/**
 * Copy text to the clipboard
 * @param {*} text - The text to copy
 */
export function copy(text) {
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
