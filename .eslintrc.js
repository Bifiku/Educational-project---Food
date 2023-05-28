module.exports = {
    extends: ["airbnb-base", "prettier", "eslint:recommended"],
    parser: "@babel/eslint-parser",
    parserOptions: {
        requireConfigFile: false, // <== ADD THIS
        ecmaVersion: 2018 // Allows for the parsing of modern ECMAScript features
    },
    env: {
        browser: true,
        es6: true,
        jest: true,
    },
    rules: {
        "no-console": 0,
        "import/prefer-default-export": 0,
        "prefer-template": 0,
        "strict": 0,
        "no-invalid-this": ["error", { "capIsConstructor": false }],
        "func-names": ["error", "as-needed"],
        "max-classes-per-file": 0,
        "one-var": 0,
        "no-unused-expressions": 0,
        "no-else-return": 0,
        "no-use-before-define": 0,
        "no-shadow": 0,
        "no-sequences": 0,
        "prefer-destructuring": 0,
        "eqeqeq": 0
        // "no-unused-expressions": 0
        // "object-shorthand": 0
    },
};