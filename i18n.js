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
    "loadLocaleFrom": async (lang, ns) => {
        return await require(`./src/locales/${lang}/${ns}.json`);
    }
}
module.exports = i18nConfig;