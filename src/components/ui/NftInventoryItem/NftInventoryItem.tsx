// React
import React from "react";
import { shortenHashString } from "src/scripts/util/strings";
import ActiveLink from "../ActiveLink/ActiveLink";
import Img from "../Img/Img";
import Skeleton from "../Skeleton/Skeleton";
import styles from "./NftInventoryItem.module.scss";

const NftInventoryItem: React.FC<{ item?: IApiNftInventory }> = ({ item }) => {
    const { name, owner, property_version, uri } = item || {}; 

    return (
        <div className={styles.nft}>
            {!item && <Skeleton style={{ minHeight: 250, height: 250 }} />}
            {uri && <div className={styles.nft__image}>
                <Img src={uri} alt={name} />
            </div>}
            {name && <div className={styles.nft__name}>{name}</div>}
            {property_version !== undefined && <div className={styles.nft__row}>
                <div className={styles.nft__label}>Property Ver.</div>
                <div className={styles.nft__value}>{property_version}</div>
            </div>}
            {owner && <div className={styles.nft__row}>
                <div className={styles.nft__label}>Owner</div>
                <ActiveLink  href={`/accounts/${owner}`}>
                    <a className={styles.nft__address}>
                        {shortenHashString(owner)}
                    </a>
                </ActiveLink>
            </div>}
        </div>
    );
};

export default NftInventoryItem;
