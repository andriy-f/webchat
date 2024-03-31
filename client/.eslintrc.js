module.exports = {
    globals: {
        __PATH_PREFIX__: true,
    },
    ignorePatterns: ['node_modules/', '.cache/', 'public/'],
    'env': {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:react/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    parser: '@typescript-eslint/parser',
    "plugins": [
        "react"
    ],
    'rules': {
        semi: ['warn', 'never'],
        quotes: ['warn', 'single'],
    }
}
