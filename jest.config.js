/** @type {import('jest').Config} */
const config = {
  coverageProvider: "v8",

  transform: {
    "^.+\\.[tj]sx?$": [
      "esbuild-jest",
      {
        loaders: {
          ".js": "jsx",
          ".jsx": "jsx",
          ".ts": "tsx",
          ".tsx": "tsx",
        },
      },
    ],
  },

  testEnvironment: "jsdom",

  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[tj]s?(x)"],

  transformIgnorePatterns: ["\\\\node_modules\\\\", "\\.pnp\\.[^\\\\]+$"],

  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"],

  moduleNameMapper: {
    "^next/navigation$":
      "C:/Users/ulf_f/OneDrive/Desktop/bank-cicd/__mocks__/next/navigation.js",
    "^@testing-library/jest-dom/extend-expect$":
      "C:/Users/ulf_f/OneDrive/Desktop/bank-cicd/node_modules/@testing-library/jest-dom/extend-expect.js",
  },
};

module.exports = config;
