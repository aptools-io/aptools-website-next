// React
import React from "react";
import { Topper } from "src/components/general";
import { Tabs , CopyText } from "src/components/ui";
import NftTransfers from "src/components/containers/NftTransfers/NftTransfers";
import NftHolders from "src/components/containers/NftHolders/NftHolders";
import NftPending from "src/components/containers/NftPending/NftPending";
import NftInventory from "src/components/containers/NftInventory/NftInventory";

import styles from "./NftCurrent.module.scss";

const NftCurrent: React.FC = () => {
    const nftTabs = [
        {
            id: 1,
            title: "Transfers",
            component: () => <NftTransfers />,
            action: (setCustomEntry, setLoading, id, queryId) => {
                setLoading(false);
            },
        },
        {
            id: 2,
            title: "Holders",
            component: () => <NftHolders />,
            action: (setCustomEntry, setLoading, id, queryId) => {
                setLoading(false);
            },
        },
        {
            id: 3,
            title: "Pending Claims",
            component: () => <NftPending />,
            action: (setCustomEntry, setLoading, id, queryId) => {
                setLoading(false);
            },
        },
        {
            id: 4,
            title: "Inventory",
            component: () => <NftInventory />,
            action: (setCustomEntry, setLoading, id, queryId) => {
                setLoading(false);
            },
        },
    ];

    return (
        <>
            <Topper backlink={"/nft"} />
            <div className={styles.nft__head}>
                <div className={styles.nft__head_image}>
                    <img src='https://picsum.photos/200' alt='current nft' />
                    <div className={styles.nft__head_mobile_title}>LFB</div>
                </div>
                <div className={styles.nft__head_body}>
                    <div className={styles.nft__head_title}>LFB</div>
                    <div className={styles.nft__head_wrapper}>
                        <div>
                            <div className={styles.nft__head_row}>
                                <div className={styles.nft__head_label}>Creator Address</div>
                                <div className={styles.nft__head_hash}>
                                    <a href='#'>
                    0xafb6e14fe47d850fd0a7395bcfb997ffacf4715e0f895cc162c218e4a7564bc6
                                    </a>
                                    <CopyText text='0xafb6e14fe47d850fd0a7395bcfb997ffacf4715e0f895cc162c218e4a7564bc6' />
                                </div>
                            </div>
                            <div className={styles.nft__head_row}>
                                <div className={styles.nft__head_label}>URI</div>
                                <div className={styles.nft__head_hash}>
                                    <a href='#'>https://nft.blocto.app/aptos-blocto-lfb</a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className={styles.nft__head_row}>
                                <div className={styles.nft__head_label}>Total Supply</div>
                                <div className={styles.nft__head_suply}>250,207</div>
                            </div>
                            <div className={styles.nft__head_row}>
                                <div className={styles.nft__head_label}>Transfers</div>
                                <div className={styles.nft__head_suply}>1,323,389</div>
                            </div>
                        </div>
                        <div>
                            <div className={styles.nft__head_row}>
                                <div className={styles.nft__head_label}>Holders</div>
                                <div className={styles.nft__head_holders}>250,207</div>
                            </div>
                            <div className={styles.nft__head_row}>
                                <div className={styles.nft__head_label}>Maximum</div>
                                <div className={styles.nft__head_holders}>
                  18,446,744,073,709,551,615
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.nft__tabs}>
                <Tabs dataArray={nftTabs} itemsCount={false}>
                    <></>
                </Tabs>
            </div>
        </>
    );
};

export default NftCurrent;
