// https://github.com/zeit/next.js/issues/706
// https://github.com/zeit/next.js/pull/3732/files

const webpack = require("webpack");
const withTypescript = require("@zeit/next-typescript");

// Update these to match your package scope name.
const internalNodeModulesRegExp = /@panter(?!.*node_modules)/;
const externalNodeModulesRegExp = /node_modules(?!\/@panter(?!.*node_modules))/;

module.exports = withTypescript({
  webpack: (config, { dev, isServer, defaultLoaders }) => {
    config.resolve.symlinks = false;
    config.externals = config.externals.map(external => {
      if (typeof external !== "function") return external;
      return (ctx, req, cb) =>
        internalNodeModulesRegExp.test(req) ? cb() : external(ctx, req, cb);
    });
    config.module.rules.push({
      test: /\.+(js|jsx)$/,
      loader: defaultLoaders.babel,
      include: [internalNodeModulesRegExp]
    });
    return config;
  },
  webpackDevMiddleware: config => {
    const ignored = [config.watchOptions.ignored[0], externalNodeModulesRegExp];
    config.watchOptions.ignored = ignored;
    return config;
  }
});
