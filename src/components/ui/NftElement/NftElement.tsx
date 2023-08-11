// React
import React from "react";
import ActiveLink from "src/components/ui/ActiveLink/ActiveLink";
import { formatNumber } from "src/scripts/util/numbers";
import Img from "../Img/Img";
import styles from "./NftElement.module.scss";

const NftElement: React.FC<{
  id: number;
  nftImage: string;
  title: string;
  floor: string;
  creator: string;
  transfers: number;
}> = ({ id, nftImage, title, floor, creator, transfers }) => {
    return (
        <ActiveLink href={`/nft/${creator}`}>
            <a>
                <div className={styles["nft"]}>
                    <div className={styles["nft__number"]}>{id}</div>
                    <div className={styles["nft__image"]}>
                        <Img src={nftImage} alt={title} />
                    </div>
                    <div>
                        <div className={styles["nft__title"]}>{title}</div>
                        <div className={styles["nft__wrapper"]}>
                            {/* <div className={styles.nft__label}>
                                <div className={styles.nft__label_title}>Floor Price</div>
                                <div className={styles.nft__label_value}>{floor}</div>
                            </div>
                            <div className={styles.nft__label}>
                                <div className={styles.nft__label_title}>Floor Price</div>
                                <div className={styles.nft__label_value}>{floor}</div>
                            </div> */}
                            <div className={styles["nft__label"]}>
                                <div className={styles["nft__label-title"]}>Transfers</div>
                                <div className={styles["nft__label-value"]}>{formatNumber(transfers)}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </ActiveLink>
    );
};

export default NftElement;
