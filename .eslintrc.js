module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	extends: ['airbnb', 'airbnb/hooks', 'plugin:react/recommended', 'plugin:jsx-a11y/recommended', 'plugin:prettier/recommended'],
	plugins: ['react', 'jsx-a11y', 'prettier'],
	rules: {
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': [
			'warn',
			{
				additionalHooks: 'useRecoilCallback'
			}
		],
		'prettier/prettier': [
			'error',
			{
				endOfLine: 'auto'
			}
		],
		'react/react-in-jsx-scope': 'off',
		'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
		'no-console': ['error', { allow: ['warn', 'error'] }],
		'import/no-unresolved': [2, { ignore: ['^(all|part):'] }]
	}
};
