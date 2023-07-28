const path = require('path');
const nextTranslate = require('next-translate');

const nextConfig = {
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
};

module.exports = nextConfig;
