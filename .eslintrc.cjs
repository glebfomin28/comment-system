module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    settings: {
        react: {
            version: 'detect'
        }
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended-type-checked',
        'plugin:react-hooks/recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs', '.commitlintrc.cjs', 'vitest.config.ts'],
    parser: '@typescript-eslint/parser',
    plugins: ['react-refresh'],
    rules: {
        'react-refresh/only-export-components': [
            'warn',
            {allowConstantExport: true},
        ],
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'warn',
    },
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json', './tsconfig.node.json'],
        tsconfigRootDir: __dirname
    }
};
