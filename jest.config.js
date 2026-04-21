/**
 * Jest Configuration
 * Setup para testes unitários do projeto CLDF
 */

export default {
  testEnvironment: "jsdom",
  roots: ["<rootDir>"],
  testMatch: ["**/__tests__/**/*.test.js"],
  moduleFileExtensions: ["js"],
  collectCoverageFrom: [
    "*.js",
    "!node_modules/**",
    "!dist/**",
    "!__tests__/**",
    "!vite.config.js",
    "!firebase-config.js",
    "!tailwind.config.js",
    "!postcss.config.js",
  ],
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 50,
      lines: 50,
      statements: 50,
    },
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  transform: {},
};
