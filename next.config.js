const path = require('path');
const nextTranslate = require('next-translate');

const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    ...nextTranslate(),
    reactStrictMode: true,
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    env: {
        BASE_HTTPS_URL: process.env.BASE_HTTPS_URL,
        BASE_WSS_URL: process.env.BASE_WSS_URL,
        BASE_TOKEN: process.env.BASE_TOKEN
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
