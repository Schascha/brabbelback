const globals = require('globals');
const jest = require('eslint-plugin-jest');
const js = require('@eslint/js');
const schascha = require('@schascha/eslint-config');
const tseslint = require('typescript-eslint');

module.exports = [
	js.configs.recommended,
	jest.configs['flat/recommended'],
	...tseslint.configs.recommended,
	{
		ignores: ['node_modules/**', 'coverage/**', 'dist/**'],
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
			'@typescript-eslint/no-explicit-any': ['off'],
			'@typescript-eslint/no-unsafe-function-type': ['off'],
			'@typescript-eslint/no-unused-expressions': ['off'],
			'@typescript-eslint/ban-ts-comment': ['off'],
			'@typescript-eslint/no-require-imports': ['off'],
		},
	},
];
