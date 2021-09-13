/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  coverageDirectory: "coverage",
  preset: 'ts-jest',
  testEnvironment: 'node',
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$"
};
