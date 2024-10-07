import { gcd, ratio } from './math';

describe('The math utils', () => {
	it('should calculate the greatest common divisor', () => {
		expect(gcd(8, 12)).toBe(4);
		expect(gcd(16, 9)).toBe(1);
	});

	it('should calculate the ratio of two numbers', () => {
		expect(ratio(16, 9)).toBe('16:9');
		expect(ratio(1024, 768)).toBe('4:3');
	});
});
