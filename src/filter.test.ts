import { compare, filter, groupBy } from './filter';

describe('The filter utils', () => {
	it('should compare values', () => {
		const array = ['foo', 'bar', 'baz'];
		expect(compare()).toBeFalsy();
		expect(compare(array, 'foo', 'contains')).toBeTruthy();
		expect(compare('foobar', 'foo', 'contains')).toBeTruthy();
		expect(compare(array, 'foo')).toBeTruthy();
	});

	it('should filter an array of objects with multiple criteria', () => {
		const array = [
			{
				name: 'Audi',
				type: 'car',
				color: 'red',
			},
			{
				name: 'VW',
				alias: 'Volkswagen',
				type: 'car',
				color: 'black',
			},
			{
				name: 'Suziki',
				type: 'motorcycle',
				color: 'blue',
			},
		];
		expect(filter(array)).toBe(array);
		expect(filter(array, [])).toBe(array);
		expect(
			filter(array, [
				{
					field: 'type',
					value: 'car',
				},
				{
					field: 'color',
					value: 'black',
				},
			]).length
		).toBe(1);
		expect(
			filter(array, [
				{
					field: ['name', 'alias'],
					value: 'VW',
				},
			]).length
		).toBe(1);
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
		];
		const obj = groupBy(array, 'group');
		expect(obj.foo).toBeDefined();
		expect(obj.foo.length).toBe(2);
		expect(obj.bar).toBeDefined();
		expect(obj.undefined).toBeDefined();
		expect(groupBy(array, 'foobar').undefined).toBeDefined();
	});
});
