/* eslint-env commonjs */
// To remove module not defined linting error

module.exports = {
    settings: {
        react: {
            version: "detect", // Tells eslint-plugin-react to automatically detect the version of React to use
        },
    },
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: ["eslint:recommended", "plugin:react/recommended", "prettier"],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: "module",
    },
    plugins: ["react", "prettier"],
    rules: {
        quotes: ["error", "double"],
        semi: ["error", "always"],
        indent: ["warn", 4],
        "no-unused-vars": "warn",
        "react/jsx-uses-react": "off",
        "react/react-in-jsx-scope": "off",
        "react/prop-types": "off",
        "no-console": "warn",
    },
};
