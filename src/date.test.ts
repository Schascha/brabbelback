import {
	addDays,
	addMonths,
	addYears,
	diffInDays,
	daysInMonth,
	formatDate,
} from './date';

describe('The date utils', () => {
	it('should add days to a date', () => {
		const date = new Date('2020-01-01');
		expect(addDays(date, 1)).toEqual(new Date('2020-01-02'));
		expect(addDays(date, 31)).toEqual(new Date('2020-02-01'));
		expect(addDays(date, -1)).toEqual(new Date('2019-12-31'));
	});

	it('should add months to a date', () => {
		const date = new Date('2020-01-01');
		expect(addMonths(date, 1)).toEqual(new Date('2020-02-01'));
		expect(addMonths(date, 12)).toEqual(new Date('2021-01-01'));
		expect(addMonths(date, -1)).toEqual(new Date('2019-12-01'));
	});

	it('should add years to a date', () => {
		const date = new Date('2020-01-01');
		expect(addYears(date, 1)).toEqual(new Date('2021-01-01'));
		expect(addYears(date, 10)).toEqual(new Date('2030-01-01'));
		expect(addYears(date, -1)).toEqual(new Date('2019-01-01'));
	});

	it('should get the difference in days between two dates', () => {
		const date = new Date('2020-01-01');
		expect(diffInDays(date, new Date('2020-01-02'))).toEqual(1);
		expect(diffInDays(date, new Date('2020-02-01'))).toEqual(31);
		expect(diffInDays(date, new Date('2020-12-31'))).toEqual(365);
		expect(diffInDays(date, new Date('2021-01-01'))).toEqual(366);
	});

	it('should get the number of days in a month', () => {
		expect(daysInMonth(new Date('2020-01-01'))).toEqual(31);
		expect(daysInMonth(new Date('2020-02-01'))).toEqual(29);
	});

	it('should format a date as YYYY-MM-DD or a custom format', () => {
		expect(formatDate(new Date('2020-01-31'))).toEqual('2020-01-31');
		expect(formatDate(new Date('2020-12-31'), 'DD.MM.YYYY')).toEqual(
			'31.12.2020'
		);
		expect(formatDate(new Date('2020-01-01'), 'D.M.YY')).toEqual('1.1.20');
	});
});
