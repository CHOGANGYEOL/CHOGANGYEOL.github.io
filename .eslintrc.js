module.exports = {
	env: {
		browser: true, // 브라우저 전역 변수 사용 가능
		es2021: true, // ES2021 문법 사용 가능
		node: true, // Node.js 전역 변수 및 스코프 사용 가능
		jest: true, // Jest 전역 변수 사용 가능
	},
	extends: [
		'react-app', // Create React App 기본 ESLint 규칙
		'react-app/jest', // Jest 테스팅을 위한 ESLint 규칙
		'airbnb-typescript', // Airbnb 스타일 가이드, TypeScript 지원
		'eslint:recommended',
		'plugin:prettier/recommended', // 'prettier' 확장을 사용
		'plugin:react/recommended',
		'plugin:import/typescript',
	],
	parser: '@typescript-eslint/parser', // TypeScript 파싱을 위한 파서
	parserOptions: {
		ecmaVersion: 'latest', // ECMAScript 버전 설정
		sourceType: 'module', // 모듈 사용 설정 (import/export)
		project: './tsconfig.json', // TypeScript 설정 파일 위치
		tsconfigRootDir: __dirname,
		ecmaFeatures: {
			jsx: true,
		},
	},
	plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier', 'import'],
	rules: {
		'@typescript-eslint/explicit-function-return-type': 0,
		'@typescript-eslint/strict-boolean-expressions': 0,
		'@typescript-eslint/no-non-null-assertion': 0,
		'@typescript-eslint/consistent-type-assertions': 0,
		'@typescript-eslint/no-floating-promises': 0,
		'@typescript-eslint/no-unsafe-argument': 0,
		'@typescript-eslint/no-misused-promises': 0,
		'@typescript-eslint/ban-ts-comment': 'off',
		'@typescript-eslint/no-dynamic-delete': 'warn',
		'@typescript-eslint/no-unused-vars': 'warn',
		'@typescript-eslint/return-await': 1,
		'@typescript-eslint/prefer-nullish-coalescing': 1,
		'prettier/prettier': 'error',
		'import/order': [
			'warn',
			{
				groups: ['builtin', 'external', 'internal', ['parent', 'sibling'], 'index', 'type'],
				pathGroups: [
					{
						pattern: 'react',
						group: 'builtin',
						position: 'before',
					},
					{
						pattern: '@**',
						group: 'external',
						position: 'after',
					},
				],
				pathGroupsExcludedImportTypes: ['react'],
				'newlines-between': 'always',
				alphabetize: {
					order: 'asc',
					caseInsensitive: true,
				},
			},
		],
	},
	ignorePatterns: ['node_modules/**', '.eslintrc.js'],
};
