module.exports = {
	settings: {
		react: {
			version: "detect"
		}
	},
	env: {
		browser: true, 
		es6: true,
		node: true,
		amd: true
	},
	extends: [
		"react-app",
		"plugin:react/recommended",
		"prettier",
		"prettier/react",
		"plugin:prettier/recommended"
	],
	parserOptions: {
		ecmaFeatures: {
			"jsx": true
		},
		ecmaVersion: 2019,
		sourceType: "module"
	},
	plugins: [
		"react",
		"eslint-plugin-import",
		"prettier"
	],
	rules: {
		"arrow-body-style": 2,
		"react/self-closing-comp": 2,
		"no-console": "off",
		"newline-before-return": 2,
		curly: "error",
		"react/prop-types": 0,
		"linebreak-style": 0,
		quotes: [
			"error",
			"single"
		],
		semi: [
			"error",
			"never"
		],
		"react/jsx-uses-react": "error",
		"react/jsx-uses-vars": "error",
		"arrow-body-style": 2,
		"react/self-closing-comp": 2,
		"react-hooks/exhaustive-deps": 0,
	}
}