// React
import React from "react";

// Styles
import classNames from "classnames";

// Redux
import { useSelector } from "react-redux";
import { IRootState } from "src/scripts/redux/store";

// Util
import { formatNumber } from "src/scripts/util/numbers";
import { ActiveLink, CopyText, Img, Plug } from "src/components/ui";
import useWindowSize from "src/scripts/hooks/useWindowSize";
import styles from "./StatsNftHead.module.scss";
import media from "./data/adaptive";


const StatsNftHead: React.FC<IComponent> = ({
    className 
}) => {
    const { nftsCollectionGeneralInfo, nftsCollectionListInventory } = useSelector((state: IRootState) => state.nfts);

    const { width } = useWindowSize();
    const mediaData = media(width);

    if(!width) return <></>;

    if(!nftsCollectionGeneralInfo) return <Plug noData />;

    const { 
        name, 
        uri, 
        creator_address, 
        total_supply,
        transfers,
        holders,
        maximum
    } = nftsCollectionGeneralInfo || {};

    const { 
        list
    } = nftsCollectionListInventory || {};

    const cutUri = (uri) => {
        if(uri?.length > 35) return `${uri.slice(0, 35)}...`;
        return uri;
    };

    return (
        <div className={styles.nft__head}>
            <div className={styles.nft__head_image}>
                {(name && list[0]?.uri) && <Img src={list[0]?.uri} alt={name} />}
                {name && <div className={styles.nft__head_mobile_title}>{name}</div>}
            </div>
            <div className={styles.nft__head_body}>
                {name && <div className={styles.nft__head_title}>{name}</div>}
                <div className={styles.nft__head_wrapper}>
                    <div>
                        {creator_address && <div className={styles.nft__head_row}>
                            <div className={styles.nft__head_label}>Creator Address</div>
                            <div className={styles.nft__head_hash}>
                                <ActiveLink href={`/accounts/${creator_address}`}>
                                    <a>{mediaData.creatorHash(creator_address)}</a>
                                </ActiveLink>
                                <CopyText text={creator_address} />
                            </div>
                        </div>}
                        {uri && <div className={styles.nft__head_row}>
                            <div className={styles.nft__head_label}>URI</div>
                            <div className={styles.nft__head_hash}>
                                <ActiveLink href={uri}>
                                    <a>{cutUri(uri)}</a>
                                </ActiveLink>
                            </div>
                        </div>}
                    </div>
                    <div>
                        {total_supply && <div className={styles.nft__head_row}>
                            <div className={styles.nft__head_label}>Total Supply</div>
                            <div className={styles.nft__head_suply}>{formatNumber(total_supply)}</div>
                        </div>}
                        {transfers && <div className={styles.nft__head_row}>
                            <div className={styles.nft__head_label}>Transfers</div>
                            <div className={styles.nft__head_suply}>{formatNumber(transfers)}</div>
                        </div>}
                    </div>
                    <div>
                        {holders && <div className={styles.nft__head_row}>
                            <div className={styles.nft__head_label}>Holders</div>
                            <div className={styles.nft__head_holders}>{formatNumber(holders)}</div>
                        </div>}
                        {maximum && <div className={styles.nft__head_row}>
                            <div className={styles.nft__head_label}>Maximum</div>
                            <div className={styles.nft__head_holders}>
                                {formatNumber(maximum)}
                            </div>
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StatsNftHead;
