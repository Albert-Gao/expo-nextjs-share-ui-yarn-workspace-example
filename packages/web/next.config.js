// Tell webpack to compile the "bar" package, necessary if you're using the export statement for example
// https://www.npmjs.com/package/next-transpile-modules
const withTM = require("next-transpile-modules")(["common-frontend"]);
const withPlugins = require("next-compose-plugins");

const reactNativeWebWebpackConfig = {
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      // Transform all direct `react-native` imports to `react-native-web`
      "react-native$": "react-native-web",
    };
    return config;
  },
};

module.exports = withPlugins(
  [
    withTM,
    {
      transpileModules: ["@TeamingCloud/common-frontend"],
    },
  ],
  reactNativeWebWebpackConfig
);
