import { Translate } from "next-translate";
import { Compass, Block, Transactions, Accounts, Picture, Sphere, Squares, Tag } from "src/components/svg";

const menu = (t: Translate): INavBarMenuItem[] => {
    return [
        {
            title: t("explorer"),
            link: "/",
            svg: <Compass />
        },
        {
            title: t("transactions"),
            link: "/transactions",
            svg: <Transactions />
        },
        {
            title: t("accounts"),
            link: "/accounts",
            svg: <Accounts />,
            after: [
                {
                    title: "TOP 200 NFT holders by value",
                    link: "/accounts/nft-value"
                }
                /* {
                    title: "TOP 200 NFT holders by amount",
                    link: "/accounts/nft-amount"
                },
                {
                    title: "TOP 200 profitable accounts",
                    link: "/accounts/profitable"
                },
                {
                    title: "Whale List",
                    link: "/accounts/whale-list"
                } */
            ]
        },
        {
            title: t("blocks"),
            link: "/blocks",
            svg: <Block />
        },
        {
            title: t("nft"),
            link: "/nft",
            svg: <Picture />
        },
        {
            title: t("validators"),
            link: "/validators",
            svg: <Sphere />
        },
        {
            title: t("ecosystem"),
            link: "/projects",
            svg: <Squares />
        },
        {
            title: t("termino wallet"),
            link: "https://termino.io/",
            target: "_blank",
            svg: <Tag />
        }
    ];
};

export default menu;
