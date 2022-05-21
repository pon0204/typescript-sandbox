/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/src'],
  collectCoverage: false,
  // collectCoverageFrom: ['**/*.ts', '!**/node_modules/**'],
  // coverageDirectory: 'coverage_dir',
  // coverageReporters: ['json'],
}
