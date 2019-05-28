module.exports =  {
    parser:  '@typescript-eslint/parser',  // Specifies the ESLint parser
    extends:  [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',  // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    ],
    'plugins': [
        // ...
        'react-hooks',
    ],
    parserOptions:  {
        ecmaVersion:  2018,  // Allows for the parsing of modern ECMAScript features
        sourceType:  'module',  // Allows for the use of imports
    },
    'env': {
        'browser': true,
        'node': true,
        'jest': true,
        'es6': true,
    },
    rules:  {
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/interface-name-prefix': 0,
        'semi': 1,
        'no-unexpected-multiline': 1,
        'eol-last': ['error', 'always'],
        'no-multiple-empty-lines': ['error', { 'max': 1, 'maxEOF': 0 }],
        'react-hooks/exhaustive-deps': 'error',
        '@typescript-eslint/array-type': [true, 'generic'],
    },
    settings:  {
        react:  {
            version:  'detect',  // Tells eslint-plugin-react to automatically detect the version of React to use
        },
    },
};
