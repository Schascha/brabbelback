const globals = require('globals');
const jest = require('eslint-plugin-jest');
const js = require('@eslint/js');
const schascha = require('@schascha/eslint-config');

module.exports = [
	js.configs.recommended,
	jest.configs['flat/recommended'],
	{
		ignores: ['node_modules/**', 'coverage/**'],
	},
	{
		languageOptions: {
			ecmaVersion: 9,
			sourceType: 'module',
			globals: {
				...globals.browser,
				...globals.node,
			},
		},
		rules: {
			...schascha.rules,
		},
	},
];
