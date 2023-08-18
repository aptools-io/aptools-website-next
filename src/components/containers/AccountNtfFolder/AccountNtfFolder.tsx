// React
import React, { useEffect, useRef, useState } from "react";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "src/scripts/redux/store";

// Components
import { AccountPerformance, AccountTokenStats } from "src/components/charts";
import { Grid, GridWrapper } from "src/components/general";

// Styles
import classNames from "classnames";
import { Button, Img, Paginator, Plug, Skeleton } from "src/components/ui";
import { percentClass } from "src/scripts/util/classes";
import { formatNumber } from "src/scripts/util/numbers";
import { concatString } from "src/scripts/util/strings";
import { Magnifier } from "src/components/svg";
import { accounts } from "src/scripts/api/requests";
import { useRouter } from "next/router";
import styles from "./AccountNtfFolder.module.scss";

const AccountNtfFolder: React.FC<{item: IApiAccountNftCollection, index: number} & IComponent> = ({
    item,
    index,
    className 
}) => {
    const [openedFolder, setOpenedFolder] = useState(false);
    const [loading, setLoading] = useState(false);

    const [nfts, setNfts] = useState({ nfts: [], total: 0 });
    const [currentPage, setCurrrentPage] = useState(1);
    const [perPage, setPerPage] = useState(10);
    const folderRef = useRef(null);

    const router = useRouter();
    const { id: address } = router.query;

    const { id, uri, supply, volume_apt = 0, volume_usd = 0, net_worth = 0 } = item || {};
    const mainImage = uri;
    const imageLink = uri[0] === "/" ? `${process.env.BASE_IMAGES_URL}${mainImage}` : mainImage;

    const handleOpenFolder = (nftIndex) => {
        if(!openedFolder) {
            accounts.getAccountNftData(address, nftIndex).then((e: unknown) => {
                const result = e as IApiAccountNfts;
                setNfts(result);
                setOpenedFolder(true);
            });
        } 
        else setOpenedFolder(false);
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
        const imageLink = uri[0] === "/" ? `${process.env.BASE_IMAGES_URL}${uri}` : uri;

        return (
            <li key={index} className={styles["account-nft-list__folder-content-item"]}>
                <div className={styles.image}>
                    <Img key={index} src={imageLink} alt={name} />
                </div>
                <div className={styles.info}>
                    <strong className={styles.name}>{name}</strong>
                    <div className={styles["info-item"]}>
                        <span className={styles.title}>Last price</span>
                        <div className={styles.values}>
                            <span className={styles.value}>{concatString(formatNumber(last_price_apt, null, false), "", " APT")}</span>
                            <span className={styles.value}>{concatString(formatNumber(last_price_usd, null, false), "$", "")}</span>
                        </div>
                    </div>
                    <div className={styles["info-item"]}>
                        <span className={styles.title}>Floor price</span>
                        <div className={styles.values}>
                            <span className={styles.value}>{concatString(formatNumber(floor_price, null, false), "$", "")}</span>
                        </div>
                    </div>
                    <div className={styles["info-item"]}>
                        <span className={styles.title}>Rarity</span>
                        <div className={styles.values}>
                            <span className={styles.value}>{rarity}</span>
                        </div>
                    </div>
                </div>
            </li>
        );
    };

    return (
        <li ref={folderRef} className={styles["account-nft-list__folder"]}>
            <div onClick={() => handleOpenFolder(id)} className={styles["account-nft-list__folder-inner"]}>
                <div className={styles["main-info"]}>
                    <Img src={imageLink} alt={item.name} />
                    <strong className={styles.title}>{item.name}</strong>
                </div>
                <div className={styles["additional-info"]}>
                    <div className={styles["additional-info__wrapper"]}>
                        <div className={styles["additional-info__wrapper-item"]}>
                            <span className={styles.title}>Supply</span>
                            <div>
                                <span className={styles.value}>{concatString(formatNumber(supply), "$", "")}</span>
                                <span className={"percent"}><div className={percentClass("0")}>0</div></span>
                            </div>
                        </div>
                        
                        <div className={styles["additional-info__wrapper-item"]}>
                            <span className={styles.title}>Volume</span>
                            <div>
                                <span className={styles.value}>{concatString(formatNumber(volume_apt), "", " APT")}</span>
                                <span className={styles.descr}>{concatString(formatNumber(volume_usd), "$", "")}</span>
                                <span className={"percent"}><div className={percentClass("0")}>0</div></span>
                            </div>
                        </div>
                    </div>

                    <div className={styles["additional-info__wrapper"]}>
                        <div className={styles["additional-info__wrapper-item"]}>
                            <span className={styles.title}>Net Worth</span>
                            <div>
                                <span className={styles.value}>{concatString(formatNumber(net_worth), "", " APT")}</span>
                            </div>
                        </div>
                        
                        <div className={styles["additional-info__wrapper-item"]}>
                            <span className={styles.title}>Potential profit</span>
                            <div>
                                <span className={styles.value}>{concatString(formatNumber(0), "", " APT")}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classNames([
                styles["account-nft-list__folder-content"],
                { [styles.open]: openedFolder }
            ])}>
                <div className={styles["account-nft-list__folder-content-items"]}>
                    <Paginator
                        page={currentPage} 
                        perPage={perPage} 
                        changePerPage
                        customPaginatorWrapper={folderRef}
                        total={nfts?.total} 
                        className={styles.pagination}
                        setPerPage={setPerPage}
                        onChangePage={async (page) => {
                            setCurrrentPage(page);
                            setLoading(true);
                            await accounts.getAccountNftData(address, id, perPage, page).then((e: unknown) => {
                                const result = e as IApiAccountNfts;
                                setNfts(result);
                                setLoading(false);
                            });
                        }}
                        onChangePerPage={async (perPage) => {
                            setPerPage(perPage);
                            setLoading(true);
                            await accounts.getAccountNftData(address, id, perPage, currentPage).then((e: unknown) => {
                                const result = e as IApiAccountNfts;
                                setNfts(result);
                                setLoading(false);
                            });
                        }}
                    >
                        <ul className={styles["account-nft-list__folder-content-items-inner"]}>
                            {!loading ? 
                                nfts.nfts?.map(renderItem) : 
                                new Array(perPage).fill(null).map((_, index) => 
                                    <li key={index} className={classNames([styles["account-nft-list__folder-content-item"], styles.plug])}>
                                        <div className={styles.image}>
                                            <Img src={imageLink} alt={""} />
                                        </div>
                                        <div className={styles.info}></div>
                                        <Skeleton style={{ minHeight: 200 }} />
                                    </li>)
                            }
                        </ul>
                    </Paginator>
                </div>
            
            </div>
        </li>
    );
};

export default AccountNtfFolder;
