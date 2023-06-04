import { SocialTwitter, SocialTelegram, SocialMedium, SocialLinkedin, SocialDiscord, } from "src/components/svg";

const socials = (): ISocialsItem[] => {
    return [
        {
            "link": "https://twitter.com/aptools_io",
            "svg": <SocialTwitter />
        },
        {
            "link": "https://t.me/Aptools_io",
            "svg": <SocialTelegram />
        },
        {
            "link": "https://medium.com/@aptools.io",
            "svg": <SocialMedium />
        },
        {
            "link": "https://www.linkedin.com/company/90222846/",
            "svg": <SocialLinkedin />
        },
        {
            "link": "https://discord.com/invite/5kchxMmKFy",
            "svg": <SocialDiscord />
        },
    ]
}

export default socials;