"use strict";
/**
 * Conditional class name helper.
 * @param {any} args Input of class names.
 * @return {string} Returns `args` as string.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.classnames = classnames;
function classnames(...args) {
    const classes = args.length > 1 ? args : args[0];
    if (Array.isArray(classes)) {
        return classes
            .map((value) => classnames(value))
            .join(' ')
            .trim();
    }
    else if (classes &&
        typeof classes === 'object' &&
        classes.constructor === Object) {
        return classnames(Object.keys(classes).filter((el) => {
            const value = classes[el];
            return Array.isArray(value) && !value.length ? false : value;
        }));
    }
    return classes.trim();
}
