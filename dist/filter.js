"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compare = compare;
exports.filter = filter;
exports.groupBy = groupBy;
const array_1 = require("./array");
/**
 * Compare a with b using the given operator
 * @param  {String|String[]} a - The value or array of values to compare
 * @param  {String|String[]} b - The value or array of values to compare with
 * @param  {String} operator - The operator to use, default is ''
 * @return {Boolean} Returns true if the comparison is true, otherwise false
 */
function compare(a, b, operator = '') {
    if (!a || !b)
        return false;
    switch (operator) {
        case 'contains':
            (0, array_1.toArray)(a).some((el) => (0, array_1.toArray)(b)
                .map((b) => b.toLowerCase())
                .includes(el.toLowerCase()));
        default:
            return Array.isArray(a) ? (0, array_1.has)(a, b) : b.includes(a);
    }
}
/**
 * Filters an array of objects with multiple criteria
 * @param {Object[]} obj - The array of objects to filter
 * @param {{field: string, value: any, operator: string}[]} filters - The filters to apply
 * @return {Object} The filtered array
 */
function filter(obj, filters) {
    return filters && filters.length
        ? obj.filter((el) => {
            return filters.every((filter) => {
                if (Array.isArray(filter.field)) {
                    return filter.field.find((item) => compare(el[item], filter.value, filter.operator));
                }
                else {
                    return compare(el[filter.field], filter.value, filter.operator);
                }
            });
        })
        : obj;
}
/**
 * Group array items by key
 * @param  {Object[]} array - The array with objects to group
 * @param  {String} key - The key to group by
 * @return {Object} The grouped array
 */
function groupBy(array, key) {
    return array.reduce((rv, x) => {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
    }, {});
}
