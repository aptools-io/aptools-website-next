// React
import React from "react";

// Redux
import { IRootState } from "src/scripts/redux/store";
import { useSelector } from "react-redux";

// Styles
import classNames from "classnames";

// Components
import { Breadcrumbs, Button } from "src/components/ui";
import { useRouter } from "next/router";
import { TypeDex, TypeNftCreator, TypeNftMarketplace, TypeSmartContract, TypeValidator, TypeWallet } from "src/components/svg";
import styles from "./Topper.module.scss";

const Topper: React.FC<
    {
        backlink?: string;
        customTitle?: string | string[];
        noLink?: string[];
        additiveTitle?: string;
        afterComponent?: () => React.ReactNode;
    } & IComponent
> = ({ backlink = null, customTitle = null, additiveTitle = "", noLink = [], afterComponent = null, className }) => {
    const { title, type } = useSelector((state: IRootState) => state.pageTitle);

    const classes = classNames([styles.topper, className]);

    const types = {
        Wallet: {
            class: "color-wallet",
            svg: <TypeWallet />
        },
        Validator: {
            class: "color-validator",
            svg: <TypeValidator />
        },
        "Smart-Contract": {
            class: "color-smart-contract",
            svg: <TypeSmartContract />
        },
        "NFT Creator": {
            class: "color-nft-creator",
            svg: <TypeNftCreator />
        },
        "NFT Marketplace": {
            class: "color-nft-marketplace",
            svg: <TypeNftMarketplace />
        },
        DEX: {
            class: "color-dex",
            svg: <TypeDex />
        }
    };

    return (
        <div className={classes}>
            <div className={styles["topper__title-wrapper"]}>
                <strong
                    className={styles.topper__title}
                    dangerouslySetInnerHTML={{
                        __html: `${title}${additiveTitle}`
                    }}></strong>
                {type && (
                    <div className={classNames([styles["topper__type"], styles[types?.[type]?.class]])}>
                        {types?.[type]?.svg} {type}
                    </div>
                )}
            </div>
            <Breadcrumbs key={title} noLink={noLink} customTitle={(customTitle as string) || title} />
            <div className={styles["topper__buttons"]}>
                <Button {...(backlink ? { href: backlink } : {})} before={"back"}>
                    Back
                </Button>
                {afterComponent && afterComponent()}
            </div>
        </div>
    );
};

export default Topper;
