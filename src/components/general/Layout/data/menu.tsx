import { Translate } from "next-translate";
import { Compass, Block, Transactions, Accounts, Picture, Sphere, Squares, Tag } from "src/components/svg";

const menu = (t: Translate): INavBarMenuItem[] => {
    return [
        {
            "title": t("explorer"),
            "link": "/",
            "svg": <Compass />
        },
        {
            "title": t("transactions"),
            "link": "/transactions",
            "svg": <Transactions />
        },
        {
            "title": t("accounts"),
            "link": "/accounts",
            "svg": <Accounts />
        },
        {
            "title": t("blocks"),
            "link": "/blocks",
            "svg": <Block />
        },
        {
            "title": t("nft"),
            "link": "/nft",
            "svg": <Picture />
        },
        {
            "title": t("validators"),
            "link": "/validators",
            "svg": <Sphere />
        },
        {
            "title": t("ecosystem"),
            "link": "/projects",
            "svg": <Squares />
        },
        {
            "title": t("termino wallet"),
            "link": "https://termino.io/",
            "svg": <Tag />
        }
    ];
};

export default menu;