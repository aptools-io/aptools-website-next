const i18nConfig = {
    "locales": [
        "en"
    ],
    "defaultLocale": "en",
    "localeDetection": false,
    "pages": {
        "*": [
            "common",
            "menu"
        ]
    },
    "loadLocaleFrom": (lang, ns) => {
        return require(`./src/locales/${lang}/${ns}.json`);
    }
};
module.exports = i18nConfig;