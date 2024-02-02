/**
 * Add days to a date
 * @param {Date} date - The date to add days to
 * @param {number} days - The number of days to add
 * @returns Date
 */
export function addDays(date, days) {
	const result = new Date(date);
	result.setDate(result.getDate() + days);
	return result;
}

/**
 * Add months to a date
 * @param {Date} date - The date to add months to
 * @param {number} months - The number of months to add
 * @returns Date
 */
export function addMonths(date, months) {
	const result = new Date(date);
	result.setMonth(result.getMonth() + months);
	return result;
}

/**
 * Add years to a date
 * @param {Date} date - The date to add years to
 * @param {number} years - The number of years to add
 * @returns Date
 */
export function addYears(date, years) {
	const result = new Date(date);
	result.setFullYear(result.getFullYear() + years);
	return result;
}

/**
 * Get the difference in days between two dates
 * @param {Date} date1 - The first date
 * @param {Date} date2 - The second date
 * @returns number
 */
export function diffInDays(date1, date2) {
	return Math.ceil((date2.getTime() - date1.getTime()) / (1000 * 3600 * 24));
}

/**
 * Get the number of days in a month
 * @param {Date} date - The date to get the number of days in the month for
 * @returns number
 */
export function daysInMonth(date) {
	return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
}

/**
 * Format a date as YYYY-MM-DD or a custom format
 * @param {Date} date - The date to format
 * @param {string} format - The format to use, defaults to YYYY-MM-DD
 * @returns string
 */
export function formatDate(date, format = 'YYYY-MM-DD') {
	const day = date.getDate(),
		month = date.getMonth() + 1,
		year = date.getFullYear();
	return format
		.replace('DD', day < 10 ? `0${day}` : day)
		.replace('D', day)
		.replace('MM', month < 10 ? `0${month}` : month)
		.replace('M', month)
		.replace('YYYY', year)
		.replace('YY', year.toString().slice(-2));
}
