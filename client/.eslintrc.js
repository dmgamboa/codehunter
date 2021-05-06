module.exports = {
    settings: {
      react: {
        version: "detect" // Tells eslint-plugin-react to automatically detect the version of React to use
      }
    },
    extends: [
      "plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
    ],
    rules: {
        "react/jsx-uses-react": "off",
        "react/react-in-jsx-scope": "off",
        "react/prop-types": "off"
    },
};