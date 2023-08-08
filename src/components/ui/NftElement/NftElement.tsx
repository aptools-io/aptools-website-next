// React
import React from "react";
import ActiveLink from "src/components/ui/ActiveLink/ActiveLink";
import styles from "./NftElement.module.scss";

const NftElement: React.FC<{
  id: number;
  nftImage: string;
  title: string;
  floor: string;
  transfers: string;
}> = ({ id, nftImage, title, floor, transfers }) => {
    return (
        <ActiveLink href='/nft/test'>
            <a>
                <div className={styles.nft}>
                    <div className={styles.nft__number}>{id}</div>
                    <div className={styles.nft__image}>
                        <img src={nftImage} alt='nft' />
                    </div>
                    <div>
                        <div className={styles.nft__title}>{title}</div>
                        <div className={styles.nft__wrapper}>
                            <div className={styles.nft__label}>
                                <div className={styles.nft__label_title}>Floor Price</div>
                                <div className={styles.nft__label_value}>{floor}</div>
                            </div>
                            <div className={styles.nft__label}>
                                <div className={styles.nft__label_title}>Floor Price</div>
                                <div className={styles.nft__label_value}>{floor}</div>
                            </div>
                            <div className={styles.nft__label}>
                                <div className={styles.nft__label_title}>Floor Price</div>
                                <div className={styles.nft__label_value}>{transfers}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </ActiveLink>
    );
};

export default NftElement;
