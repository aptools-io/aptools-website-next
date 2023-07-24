// React
import React from "react";

// Redux
import { useSelector } from "react-redux";
import { IRootState } from "src/scripts/redux/store";

// Components
import { AccountPerformance, AccountTokenStats } from "src/components/charts";
import { Grid, GridWrapper } from "src/components/general";

// Styles
import classNames from "classnames";
import { Img } from "src/components/ui";
import styles from "./AccountNtfList.module.scss";

const AccountNtfList: React.FC<IComponent> = ({
    className 
}) => {
    const { accountNfts = [] } = useSelector((state: IRootState) => state.accounts);
    console.log(accountNfts);

    const classes = classNames([
        styles["account-nft-list"],
        className
    ]);

    if(!accountNfts) return <></>;

    const renderFolders = (item: IApiAccountNfts, index: number) => {
        const mainImage = item?.nfts[0]?.uri;
        return (
            <li key={index} className={styles["account-nft-list__folder"]}>
                <div className={styles["main-info"]}>
                    <Img src={mainImage} alt={item.name} />
                    {item.name}
                </div>
                <div className={styles["additional-info"]}>
                    additional
                </div>
            </li>
        );
    };

    return (
        <div className={classes}>
            {accountNfts && <ul className={styles["account-nft-list__folders"]}>{accountNfts.map(renderFolders)}</ul>}
        </div>
    );
};

export default AccountNtfList;
