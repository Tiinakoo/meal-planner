module.exports = {
  verbose: true,
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": ["./babelJestTransformer"],
    "^.+\\.css$": ["react-scripts/config/jest/cssTransform.js"],
    "^(?!.*\\.(js|jsx|ts|tsx|css|json)$)": [
      "react-scripts/config/jest/fileTransform.js",
    ],
  },
  transformIgnorePatterns: [".*(node_modules)(?!.*(library).*).*$"],
  setupFilesAfterEnv: ["./packages/foodis/front-end/setUpUnitTests"],
  watchPathIgnorePatterns: [
    "/node_modules/",
    "/coverage/",
    "/build/",
    "/cdk.out/",
    "/test-reports/",
  ],
};
