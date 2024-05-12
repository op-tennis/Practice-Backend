/** @type {import('ts-jest').JestConfigWithTsJest} */
const fs = require('fs')
const config = JSON.parse(fs.readFileSync(`${__dirname}/.swcrc`, 'utf-8'))

module.exports = {
    preset: 'ts-jest',
    // ts-jestから@swc/jestに変換
    transform: {
        '^.+\\.(t|j)sx?$': ['@swc/jest', { ...config, /* custom configuration in Jest */ }],
    },
    testEnvironment: 'node',
};
