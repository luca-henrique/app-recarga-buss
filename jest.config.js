const { resolve } = require('path');

module.exports = {
  preset: 'react-native',
  testEnvironment: 'node',
  timers: 'fake',
  preset: '@testing-library/react-native',
  automock: false,
  verbose: false,
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',
  },
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.story.tsx',
    '!src/**/routes/**',
    '!src/**/types/**',
    '!src/config/**',
    '!**/{index,styles,types}.{ts,tsx}',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node', 'd.ts'],
  moduleNameMapper: {
    '\\.svg': '<rootDir>/__mocks__/svgMock.js',
  },
  coverageReporters: ['json', 'lcov', 'text', 'text-summary'],
  transformIgnorePatterns: [resolve(__dirname, '../../packages')],
};
