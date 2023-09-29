/**
 * Add days to a date
 * @param {Date} date
 * @param {number} days
 * @returns Date
 */
export function addDays(date, days) {
	const result = new Date(date);
	result.setDate(result.getDate() + days);
	return result;
}

/**
 * Add months to a date
 * @param {Date} date
 * @param {number} months
 * @returns Date
 */
export function addMonths(date, months) {
	const result = new Date(date);
	result.setMonth(result.getMonth() + months);
	return result;
}

/**
 * Add years to a date
 * @param {Date} date
 * @param {number} years
 * @returns Date
 */
export function addYears(date, years) {
	const result = new Date(date);
	result.setFullYear(result.getFullYear() + years);
	return result;
}

/**
 * Get the difference in days between two dates
 * @param {Date} date1
 * @param {Date} date2
 * @returns number
 */
export function diffInDays(date1, date2) {
	return Math.ceil((date2.getTime() - date1.getTime()) / (1000 * 3600 * 24));
}

/**
 * Get the number of days in a month
 * @param {Date} date
 * @returns number
 */
export function daysInMonth(date) {
	return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
}

/**
 * Format a date as YYYY-MM-DD or a custom format
 * @param {Date} date
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
