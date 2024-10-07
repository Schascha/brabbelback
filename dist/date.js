"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addDays = addDays;
exports.addMonths = addMonths;
exports.addYears = addYears;
exports.diffInDays = diffInDays;
exports.daysInMonth = daysInMonth;
exports.formatDate = formatDate;
/**
 * Add days to a date
 * @param {Date} date - The date to add days to
 * @param {number} days - The number of days to add
 * @returns {Date} The new date
 */
function addDays(date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}
/**
 * Add months to a date
 * @param {Date} date - The date to add months to
 * @param {number} months - The number of months to add
 * @returns {Date} The new date
 */
function addMonths(date, months) {
    const result = new Date(date);
    result.setMonth(result.getMonth() + months);
    return result;
}
/**
 * Add years to a date
 * @param {Date} date - The date to add years to
 * @param {number} years - The number of years to add
 * @returns {Date} The new date
 */
function addYears(date, years) {
    const result = new Date(date);
    result.setFullYear(result.getFullYear() + years);
    return result;
}
/**
 * Get the difference in days between two dates
 * @param {Date} date1 - The first date
 * @param {Date} date2 - The second date
 * @returns {number} The number of days between the two dates
 */
function diffInDays(date1, date2) {
    return Math.ceil((date2.getTime() - date1.getTime()) / (1000 * 3600 * 24));
}
/**
 * Get the number of days in a month
 * @param {Date} date - The date to get the number of days in the month for
 * @returns {number} The number of days in the month
 */
function daysInMonth(date) {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
}
/**
 * Format a date as YYYY-MM-DD or a custom format
 * @param {Date} date - The date to format
 * @param {string} format - The format to use, defaults to YYYY-MM-DD
 * @returns {string} The formatted date as a string
 */
function formatDate(date, format = 'YYYY-MM-DD') {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return format
        .replace('DD', day < 10 ? `0${day}` : day.toString())
        .replace('D', day.toString())
        .replace('MM', month < 10 ? `0${month}` : month.toString())
        .replace('M', month.toString())
        .replace('YYYY', year.toString())
        .replace('YY', year.toString().slice(-2));
}
