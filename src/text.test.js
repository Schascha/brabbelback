import { truncate } from './text';

describe('The text utils', () => {
	it('should truncate text to a certain length', () => {
		const str = 'This is a long text';
		expect(truncate(str)).toBe('This is a long text');
		expect(truncate(str, 10)).toBe('This is...');
		expect(truncate(str, 11)).toBe('This is...');
		expect(truncate(str, 10, '')).toBe('This is a');
		expect(truncate(`     ${str}     `, 10)).toBe('This is...');
	});
});
