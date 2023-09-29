import { compare, groupBy } from './filter';

describe('The filter utils', () => {
	it('should compare values', () => {
		const array = ['foo', 'bar', 'baz'];

		expect(compare()).toBeUndefined();
		expect(compare(array, 'foo', 'contains')).toBeTruthy();
		expect(compare('foobar', 'foo', 'contains')).toBeTruthy();
		expect(compare(array, 'foo')).toBeTruthy();
	});

	it('should group array items by key', () => {
		const array = [
				{
					group: 'foo',
					name: 'Item 1',
				},
				{
					group: 'bar',
					name: 'Item 2',
				},
				{
					group: 'foo',
					name: 'Item 3',
				},
				{
					name: 'Item 4',
				},
			],
			obj = groupBy(array, 'group');
		expect(obj.foo).toBeDefined();
		expect(obj.foo.length).toBe(2);
		expect(obj.bar).toBeDefined();
		expect(obj.undefined).toBeDefined();
		expect(groupBy(array, 'foobar').undefined).toBeDefined();
	});
});
