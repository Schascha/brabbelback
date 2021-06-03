import {classnames} from './classnames';


describe('The classnames util', () => {

	it('should return formated classnames', () => {
		expect(classnames('foo')).toBe('foo');
		expect(classnames(['foo'])).toBe('foo');
		expect(classnames('foo bar')).toBe('foo bar');
		expect(classnames('foo', 'bar')).toBe('foo bar');
		expect(classnames(['foo'], ['bar'])).toBe('foo bar');
		expect(classnames('foo', 'bar', {baz: true})).toBe('foo bar baz');
		expect(classnames({foo: true, bar: undefined}, 'baz')).toBe('foo baz');
		expect(classnames({foo: true, bar: false, baz: true})).toBe('foo baz');
		expect(classnames('')).toBe('');
		expect(classnames([])).toBe('');
		expect(classnames({})).toBe('');
		expect(classnames([{foo: []}])).toBe('');
	});

});
