const path = require("path");
const nextTranslate = require("next-translate");
const loaderUtils = require("loader-utils");

const hashOnlyIdent = (context, _, exportName) => {
    const hash = loaderUtils.getHashDigest(Buffer.from(`filePath:${path.relative(context.rootContext, context.resourcePath).replace(/\\+/g, "/")}#className:${exportName}`), "md4", "base64", 4);
    return hash.replace(/[^a-zA-Z0-9-_]/g, "_").replace(/^(-?\d|--)/, "_$1");
};

const nextConfig = nextTranslate({
    /* experimental: {
        runtime: 'experimental-edge',
    }, */
    eslint: {
        ignoreDuringBuilds: false
    },
    reactStrictMode: true,
    sassOptions: {
        includePaths: [path.join(__dirname, "styles")]
    },
    env: {
        NODE_PORT: process.env.NODE_PORT,
        BASE_LOGGER_ENV: process.env.BASE_LOGGER_ENV,
        BASE_NEXT_START_ENV: process.env.BASE_NEXT_START_ENV,
        BASE_ENV_FULL: process.env.BASE_ENV_FULL,
        SITE_URL: process.env.SITE_URL,

        BASE_TOKEN: process.env.BASE_TOKEN,
        BASE_URL: process.env.BASE_URL,
        BASE_API_LOGGER: process.env.BASE_API_LOGGER,
        BASE_API_URL: process.env.BASE_API_URL,
        BASE_API_AUTH: process.env.BASE_API_AUTH,
        BASE_API2_URL: process.env.BASE_API2_URL,
        BASE_API3_URL: process.env.BASE_API3_URL,
        BASE_WEBSOCKET_URL: process.env.BASE_WEBSOCKET_URL,
        BASE_IMAGES_URL: process.env.BASE_IMAGES_URL,
        BASE_MEDIA_URL: process.env.BASE_MEDIA_URL,

        OUTSIDE_URL: process.env.OUTSIDE_URL,
        OUTSIDE_URL_2: process.env.OUTSIDE_URL_2,
        OUTSIDE_URL_3: process.env.OUTSIDE_URL_3,
        OUTSIDE_MAP_URL: process.env.OUTSIDE_MAP_URL
    },
    async redirects() {
        return [];
    },
    images: {
        path: "",
        deviceSizes: [768, 1920]
    },

    webpack: (config, { dev }) => {
        const rules = config.module.rules.find((rule) => typeof rule.oneOf === "object").oneOf.filter((rule) => Array.isArray(rule.use));

        if (!dev)
            rules.forEach((rule) => {
                rule.use.forEach((moduleLoader) => {
                    if (moduleLoader.loader?.includes("css-loader") && !moduleLoader.loader?.includes("postcss-loader")) moduleLoader.options.modules.getLocalIdent = hashOnlyIdent;
                });
            });

        return config;
    },
    i18n: {
        locales: ["en"],
        defaultLocale: "en",
        localeDetection: false,
        pages: {
            "*": ["common", "menu", "pages"]
        },
        loadLocaleFrom: (lang, ns) => {
            return require(`./src/locales/${lang}/${ns}.json`);
        }
    }
});

module.exports = nextConfig;
