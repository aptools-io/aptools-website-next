const path = require('path');
const nextTranslate = require('next-translate');
const loaderUtils = require('loader-utils');

const hashOnlyIdent = (context, _, exportName) =>
  loaderUtils
    .getHashDigest(
      Buffer.from(
        `filePath:${path
          .relative(context.rootContext, context.resourcePath)
          .replace(/\\+/g, '/')}#className:${exportName}`,
      ),
      'md4',
      'base64',
      3,
    )
    .replace(/[^a-zA-Z0-9-_]/g, '_')
    .replace(/^(-?\d|--)/, '_$1');

const nextConfig = {
    /* experimental: {
        runtime: 'experimental-edge',
    }, */
    eslint: {
        ignoreDuringBuilds: false,
    },
    ...nextTranslate(),
    reactStrictMode: true,
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    env: {
        BASE_TOKEN: process.env.BASE_TOKEN,
        BASE_URL: process.env.BASE_URL,
        BASE_API_URL: process.env.BASE_API_URL,
        BASE_API2_URL: process.env.BASE_API2_URL,
        BASE_WEBSOCKET_URL: process.env.BASE_WEBSOCKET_URL,
        BASE_IMAGES_URL: process.env.BASE_IMAGES_URL,
    },
    async redirects() {
        return [ ]
    },
    images: {
        path: '',
        deviceSizes: [768, 1920],
    },
    webpack: (config, { dev }) => {
        const rules = config.module.rules
          .find((rule) => typeof rule.oneOf === 'object')
          .oneOf.filter((rule) => Array.isArray(rule.use));
    
        if (!dev)
          rules.forEach((rule) => {
            rule.use.forEach((moduleLoader) => {
              if (
                moduleLoader.loader?.includes('css-loader') &&
                !moduleLoader.loader?.includes('postcss-loader')
              )
                moduleLoader.options.modules.getLocalIdent = hashOnlyIdent;
    
                // earlier below statements were sufficient:
                // delete moduleLoader.options.modules.getLocalIdent;
                // moduleLoader.options.modules.localIdentName = '[hash:base64:6]';
            });
        });

        return config;
      },

};

module.exports = nextConfig;
