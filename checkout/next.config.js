// https://github.com/zeit/next.js/issues/706
// https://github.com/zeit/next.js/pull/3732/files

const webpack = require("webpack");
// const withTypescript = require("./withTypescript");
const withBundleAnalyzer = require("@zeit/next-bundle-analyzer");
const withTypescript = require("@zeit/next-typescript");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

// Update these to match your package scope name.
const internalNodeModulesRegExp = /@panter(?!.*node_modules)/;
const externalNodeModulesRegExp = /node_modules(?!\/@panter(?!.*node_modules))/;

module.exports = withBundleAnalyzer(
  withTypescript(
    {
      assetPrefix: "http://localhost:4002",
      webpack: (config, { dev, isServer, defaultLoaders, dir }) => {
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

        config.module.rules = config.module.rules.map(
          r =>
            String(r.test) === String(/\.(ts|tsx)$/)
              ? {
                  test: /\.(ts|tsx)$/,
                  include: [dir, internalNodeModulesRegExp],
                  exclude: externalNodeModulesRegExp,
                  use: [
                    defaultLoaders.babel,
                    {
                      loader: "ts-loader",
                      options: Object.assign(
                        {},
                        {
                          transpileOnly: true
                        },
                        config.typescriptLoaderOptions
                      )
                    }
                  ]
                }
              : r
        );

        return config;
      },
      webpackDevMiddleware: config => {
        const ignored = [
          config.watchOptions.ignored[0],
          externalNodeModulesRegExp
        ];
        config.watchOptions.ignored = ignored;
        return config;
      },
      analyzeServer: ["server", "both"].includes(process.env.BUNDLE_ANALYZE),
      analyzeBrowser: ["browser", "both"].includes(process.env.BUNDLE_ANALYZE),
      bundleAnalyzerConfig: {
        server: {
          analyzerMode: "static",
          reportFilename: "../../bundles/server.html"
        },
        browser: {
          analyzerMode: "static",
          reportFilename: "../bundles/client.html"
        }
      }
    },
    { internalNodeModulesRegExp, externalNodeModulesRegExp }
  )
);
