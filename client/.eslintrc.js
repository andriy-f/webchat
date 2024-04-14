module.exports = {
    globals: {
        __PATH_PREFIX__: true,
    },
    ignorePatterns: ['node_modules/', '.cache/', 'public/'],
    'env': {
        'browser': true,
        'es2021': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended'
    ],
    'overrides': [
        {
            'env': {
                'node': true
            },
            'files': [
                '.eslintrc.{js,cjs}'
            ],
            'parserOptions': {
                'sourceType': 'script'
            }
        }
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType': 'module'
    },
    'plugins': [
        '@typescript-eslint',
        'react'
    ],
    'rules': {
        semi: ['warn', 'never'],
        quotes: ['warn', 'single'],
    },
    'settings': {
        'react': {
          'version': 'detect',
        }
    },
}
