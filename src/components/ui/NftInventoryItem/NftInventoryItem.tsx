// React
import React from 'react';
import styles from './NftInventoryItem.module.scss';

const NftInventoryItem: React.FC = () => {
  return (
    <div className={styles.nft}>
      <div className={styles.nft__image}>
        <img src='https://picsum.photos/200' alt='nftIcon' />
      </div>
      <div className={styles.nft__name}>LFB #103614</div>
      <div className={styles.nft__row}>
        <div className={styles.nft__label}>Property Ver.</div>
        <div className={styles.nft__value}>0</div>
      </div>
      <div className={styles.nft__row}>
        <div className={styles.nft__label}>Owner</div>
        <a className={styles.nft__address} href='#'>
          0x0914970ae189f6894f3b914
        </a>
      </div>
    </div>
  );
};

export default NftInventoryItem;
