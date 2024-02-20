import { getCookie, setCookie, removeCookie, clearCookies } from './cookie';

describe('The cookie util', () => {
	afterEach(() => {
		clearCookies();
	});

	it('should get a cookie', () => {
		setCookie('foo', 'bar');
		expect(getCookie('foo')).toBe('bar');
		expect(getCookie('bar')).toBe(false);
	});

	it('should set a cookie', () => {
		setCookie('foo', 'bar', 1);
		setCookie();
		expect(document.cookie).toBe('foo=bar');
	});

	it('should remove a cookie', () => {
		removeCookie('foo');
		expect(document.cookie).toBe('');
	});

	it('should clear all cookies', () => {
		setCookie('foo', 'bar');
		clearCookies();
		expect(document.cookie).toBe('');
		setCookie('foo', 'bar');
		clearCookies(['foo']);
		expect(document.cookie).toBe('foo=bar');
	});
});
