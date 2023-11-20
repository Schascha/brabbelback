import { copy } from './copy';

describe('The copy util', () => {
	it('should use execCommand or navigator clipboard methods', () => {
		// Mock the document.execCommand method
		document.execCommand = jest.fn();
		copy('foo');
		expect(document.execCommand).toHaveBeenCalledWith('copy');

		// Mock the navigator.clipboard method
		navigator.clipboard = {
			writeText: jest.fn(),
		};
		copy('foo');
		expect(navigator.clipboard.writeText).toHaveBeenCalledWith('foo');
	});
});
