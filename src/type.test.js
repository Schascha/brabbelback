import { typeOf } from './type';

describe('The type utils', () => {
	it('should get type of value', () => {
		expect(typeOf('')).toBe('string');
		expect(typeOf(null)).toBe('null');
		expect(typeOf(undefined)).toBe('undefined');
		expect(typeOf([])).toBe('array');
		expect(typeOf(1)).toBe('number');
		expect(typeOf(NaN)).toBe('number');
		expect(typeOf({})).toBe('object');
		expect(typeOf(Symbol())).toBe('symbol');
		expect(typeOf(() => {})).toBe('function');
	});
});
