module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
    moduleNameMapper: {
      // Your module name mapper configuration
    },
    transform: {
      '^.+\\.(ts|tsx|js|jsx)?$': 'ts-jest',
    },
  };