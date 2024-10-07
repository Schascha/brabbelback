/**
 * Add days to a date
 * @param {Date} date - The date to add days to
 * @param {number} days - The number of days to add
 * @returns {Date} The new date
 */
export declare function addDays(date: Date, days: number): Date;
/**
 * Add months to a date
 * @param {Date} date - The date to add months to
 * @param {number} months - The number of months to add
 * @returns {Date} The new date
 */
export declare function addMonths(date: Date, months: number): Date;
/**
 * Add years to a date
 * @param {Date} date - The date to add years to
 * @param {number} years - The number of years to add
 * @returns {Date} The new date
 */
export declare function addYears(date: Date, years: number): Date;
/**
 * Get the difference in days between two dates
 * @param {Date} date1 - The first date
 * @param {Date} date2 - The second date
 * @returns {number} The number of days between the two dates
 */
export declare function diffInDays(date1: Date, date2: Date): number;
/**
 * Get the number of days in a month
 * @param {Date} date - The date to get the number of days in the month for
 * @returns {number} The number of days in the month
 */
export declare function daysInMonth(date: Date): number;
/**
 * Format a date as YYYY-MM-DD or a custom format
 * @param {Date} date - The date to format
 * @param {string} format - The format to use, defaults to YYYY-MM-DD
 * @returns {string} The formatted date as a string
 */
export declare function formatDate(date: Date, format?: string): string;
