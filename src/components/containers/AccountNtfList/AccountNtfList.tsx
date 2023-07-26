// React
import React, { useEffect, useState } from "react";

// Redux
import { useSelector } from "react-redux";
import { IRootState } from "src/scripts/redux/store";

// Components
import { AccountPerformance, AccountTokenStats } from "src/components/charts";
import { Grid, GridWrapper } from "src/components/general";

// Styles
import classNames from "classnames";
import { Button, Img, Plug, Skeleton } from "src/components/ui";
import { percentClass } from "src/scripts/util/classes";
import { formatNumber } from "src/scripts/util/numbers";
import { concatString } from "src/scripts/util/strings";
import { Magnifier } from "src/components/svg";
import styles from "./AccountNtfList.module.scss";

const AccountNtfList: React.FC<IComponent> = ({
    className 
}) => {
    const { accountNfts = [], accountsLoading: loading = false } = useSelector((state: IRootState) => state.accounts);
    const [openedFolder, setOpenedFolder] = useState({ id: 0, opened: false });
    const [filteredNfts, setFilteredNtfs] = useState(accountNfts);
    const [searchQuery, setSearchQuery] = useState("");

    const classes = classNames([
        styles["account-nft-list"],
        className
    ]);
    
    useEffect(() => {
        if(accountNfts?.length) setFilteredNtfs(accountNfts.filter(x => {
            if(searchQuery === "") return accountNfts;
            return x.name.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1;
        }));
    }, [searchQuery, accountNfts]);

    if(loading) return <Skeleton style={{ height: 360 }} />;

    if(!accountNfts?.length) return <Plug noData />;

    const handleOpenFolder = (id) => {
        if(openedFolder.id === id) {
            setOpenedFolder({ id, opened: !openedFolder.opened });
            return;
        } 
        setOpenedFolder({ id, opened: true });
    };

    const renderItem = (item: IApiAccountNft, index: number) => {
        const { 
            uri = "", 
            name = "", 
            last_price_apt = 0, 
            last_price_usd = 0,
            floor_price = 0,
            rarity = ""
        } = item;
        const imageLink = `${process.env.BASE_IMAGES_URL}${uri}`;

        return (
            <li key={index} className={styles["account-nft-list__folder-content-item"]}>
                <div className={styles["image"]}>
                    <Img src={imageLink} alt={name} />
                </div>
                <div className={styles["info"]}>
                    <strong className={styles["name"]}>{name}</strong>
                    <div className={styles["info-item"]}>
                        <span className={styles["title"]}>Last price</span>
                        <div className={styles["values"]}>
                            <span className={styles["value"]}>{last_price_apt}</span>
                            <span className={styles["value"]}>{last_price_usd}</span>
                        </div>
                    </div>
                    <div className={styles["info-item"]}>
                        <span className={styles["title"]}>Floor price</span>
                        <div className={styles["values"]}>
                            <span className={styles["value"]}>{floor_price}</span>
                        </div>
                    </div>
                    <div className={styles["info-item"]}>
                        <span className={styles["title"]}>Rarity</span>
                        <div className={styles["values"]}>
                            <span className={styles["value"]}>{rarity}</span>
                        </div>
                    </div>
                </div>
            </li>
        );
    };

    const renderFolders = (item: IApiAccountNfts, index: number) => {
        const { nfts = [], supply, volume_apt = 0, volume_usd = 0, net_worth = 0 } = item || {};
        const mainImage = nfts[0]?.uri;
        const imageLink = `${process.env.BASE_IMAGES_URL}${mainImage}`;

        
        return (
            <li key={index} className={styles["account-nft-list__folder"]}>
                <div onClick={() => handleOpenFolder(index)} className={styles["account-nft-list__folder-inner"]}>
                    <div className={styles["main-info"]}>
                        <Img src={imageLink} alt={item.name} />
                        <strong className={styles["title"]}>{item.name}</strong>
                    </div>
                    <div className={styles["additional-info"]}>
                        <div className={styles["additional-info__wrapper"]}>
                            <div className={styles["additional-info__wrapper-item"]}>
                                <span className={styles["title"]}>Supply</span>
                                <div>
                                    <span className={styles["value"]}>{concatString(formatNumber(supply), "$", "")}</span>
                                    <span className={"percent"}><div className={percentClass("20")}>+0</div></span>
                                </div>
                            </div>
                            
                            <div className={styles["additional-info__wrapper-item"]}>
                                <span className={styles["title"]}>Volume</span>
                                <div>
                                    <span className={styles["value"]}>{concatString(formatNumber(volume_apt), "", " APT")}</span>
                                    <span className={styles["descr"]}>{concatString(formatNumber(volume_usd), "$", "")}</span>
                                    <span className={"percent"}><div className={percentClass("20")}>+0</div></span>
                                </div>
                            </div>
                        </div>

                        <div className={styles["additional-info__wrapper"]}>
                            <div className={styles["additional-info__wrapper-item"]}>
                                <span className={styles["title"]}>Net Worth</span>
                                <div>
                                    <span className={styles["value"]}>{concatString(formatNumber(net_worth), "", " APT")}</span>
                                </div>
                            </div>
                            
                            <div className={styles["additional-info__wrapper-item"]}>
                                <span className={styles["title"]}>Potential profit</span>
                                <div>
                                    <span className={styles["value"]}>{concatString(formatNumber(0), "", " APT")}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classNames([
                    styles["account-nft-list__folder-content"],
                    { [styles["open"]]: openedFolder.id === index && openedFolder.opened }
                ])}>
                    <ul className={styles["account-nft-list__folder-content-items"]}>
                        {nfts.map(renderItem)}
                    </ul>
                </div>
            </li>
        );
    };

    const handleInputChange = (e) => {
        setSearchQuery(e.currentTarget.value);
    };

    

    return (
        <div className={classes}>
            <div  className={styles["account-nft-list__search"]}>
                <div className={styles["account-nft-list__search-icon"]}><Magnifier /></div>
                <input type={"text"} value={searchQuery} onChange={handleInputChange} />
                <div className={styles["account-nft-list__search-button"]}><Button>Search</Button></div>
            </div>
            {filteredNfts && <ul className={styles["account-nft-list__folders"]}>{filteredNfts.map(renderFolders)}</ul>}
        </div>
    );
};

export default AccountNtfList;
