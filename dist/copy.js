"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.copy = copy;
/**
 * Copy text to the clipboard
 * @param {any} text - The text to copy
 * @returns {void}
 */
function copy(text) {
    if (navigator && navigator.clipboard) {
        navigator.clipboard.writeText(text);
    }
    else {
        const input = document.createElement('input');
        document.body.appendChild(input);
        input.value = text;
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
    }
}
