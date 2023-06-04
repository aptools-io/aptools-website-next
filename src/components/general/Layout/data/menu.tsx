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
            "link": "/test-1",
            "svg": <Transactions />
        },
        {
            "title": t("accounts"),
            "link": "/test-2",
            "svg": <Accounts />
        },
        {
            "title": t("blocks"),
            "link": "/test-3",
            "svg": <Block />
        },
        {
            "title": t("nft"),
            "link": "/test-4",
            "svg": <Picture />
        },
        {
            "title": t("validators"),
            "link": "/test",
            "svg": <Sphere />
        },
        {
            "title": t("ecosystem"),
            "link": "/test-5",
            "svg": <Squares />
        },
        {
            "title": t("termino wallet"),
            "link": "/test-6",
            "svg": <Tag />
        }
    ];
};

export default menu;