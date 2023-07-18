// React
import React from "react";

// Next
import { useRouter } from "next/router";

// Styles
import classNames from "classnames";

// Redux
import { useSelector } from "react-redux";
import { IRootState } from "src/scripts/redux/store";

// Components
import { Grid, GridWrapper } from "src/components/general";
import { Img, Plate } from "src/components/ui";

// Utils
import { concatString } from "src/scripts/util/strings";
import { formatNumber, setSign } from "src/scripts/util/numbers";
import { Coins, Copy, Wallet } from "src/components/svg";
import styles from "./StatsAccount.module.scss";
import { getImageFromApi } from "src/scripts/util/image";
import { getBaseHttpsUrl } from "src/scripts/util/data";

const StatsAccount: React.FC<IComponent> = ({
    className 
}) => {
    const router = useRouter();
    const { query } = router;
    
    const { accountStats } = useSelector((state: IRootState) => state.accounts);
    const { 
        net_worth, 
        
        current_balance, 
        all_time_profit,
        
        best_performer,
        worst_performer,

        current_nft_balance,
        all_time_nft_profit,

        best_nft_performer,
        worst_nft_performer
    } = accountStats || {};

    const {
        volume_perc: bestVolumePerc,
        volume_usd: bestVolumeUsd,
        coin_name: bestCoinName,
        coin_symbol: bestCoinSymbol,
    } = best_performer || {};

    const {
        volume_perc: worstVolumePerc,
        volume_usd: worstVolumeUsd,
        coin_name: worstCoinName,
        coin_symbol: worstCoinSymbol,
    } = worst_performer || {};

    const {
        volume_perc: bestNftVolumePerc,
        volume_usd: bestNftVolumeUsd,
        nft_name: bestNftName,
        nft_collection: bestNftCollection,
        nft_uri: bestNftUri
    } = best_nft_performer || {};

    const {
        volume_perc: worstNftVolumePerc,
        volume_usd: worstNftVolumeUsd,
        nft_name: worstNftName,
        nft_collection: worstNftCollection,
        nft_uri: worstNftUri
    } = worst_nft_performer || {};

    /* const {
        volume_perc: worstVolumePerc,
        volume_usd: worstVolumeUsd
    } = worst_performer || {}; */


    console.log(accountStats);

    const priceClass = (number: string) => {
        const negative = Number(number) < 0 || Number.isNaN(number);
        return classNames([
            "additive",
            ...negative ? ["negative"] : []
        ]);
    };
    

    const classes = classNames([
        styles["stats-accounts"],
        className
    ]);


    const renderBalance = (title, balance, profit) => {
        return (
            <>
                <div className={"stats__top"}>
                    <div className={"stats__top-wrapper"}>
                        <strong className={"stats__top-title"}>{title}</strong>
                    </div>
                    <div className={"stats__top-stats"}>
                        <span className={"title"}>{concatString(formatNumber(balance), "", "$")}</span>
                    </div>
                </div>
                <div className={"stats__item"}>
                    <div className={"stats__item-wrapper"}>
                        <span className={"title"}>All-time profit</span>
                        <span className={"info percent"}>
                            {concatString(formatNumber(profit), "", "$")}
                            <span className={priceClass(profit)}>
                                {setSign(formatNumber(profit))}%
                            </span>
                        </span>
                    </div>
                </div>
            </>
        )
    }

    const renderPerformer = (title, volume, percent, name = "", symbol = "", image = "") => {
        return (
            <>
                 <div className={"stats__top"}>
                    <div className={"stats__top-wrapper"}>
                        <strong className={"stats__top-title"}>{title}</strong>
                    </div>
                </div>
                <div className={"stats__item"}>
                    <div className={"stats__item-wrapper"}>
                        <span className={"title"}>
                            <div className={"item-data"}>
                                <Img src={image ? `${getBaseHttpsUrl()}${image}` : getImageFromApi(symbol)} alt={name} />
                                <div className={"item-data__info"}>
                                    <strong>{name}</strong>
                                    <div>{symbol}</div>
                                </div>
                            </div>
                            
                        </span>
                        <span className={"info percent"}>
                            {concatString(formatNumber(volume), "", "$")}
                            <span className={priceClass(percent)}>
                                {concatString(setSign(formatNumber(percent)), "", "%")}
                            </span>
                        </span>
                    </div>
                </div>
            </>
        )
    }

    return (
        <Grid className={classes} columns={3}>
            {/* ========= */}
            <GridWrapper gridWidth={1}>
                <Plate noMin>
                    <div className={"stats__top"}>
                        <div className={"stats__top-wrapper"}>
                            <div className={"stats__top-icon"}>
                                <Coins />
                            </div>
                            <strong className={"stats__top-title blue bold"}>Net Worth</strong>
                        </div>
                        <div className={"stats__top-stats"}>
                            <span className={"title"}>
                                {concatString(formatNumber(net_worth), "", "$")}
                            </span>
                        </div>
                    </div>
                </Plate>
            </GridWrapper>
            <GridWrapper gridWidth={2}>
                <Plate noMin transparent>
                    <div className={"stats__top"}>
                        <div className={"stats__top-wrapper"}>
                            <div className={"stats__top-icon"}>
                                <Wallet />
                            </div>
                            <strong className={"stats__top-title blue bold"}>Wallet</strong>
                        </div>
                        <div className={"stats__top-stats"}>
                            <span className={"title light"}>
                                {query.id}
                            </span>
                            <Copy />
                        </div>
                    </div>
                </Plate>
            </GridWrapper>


            {/* ========= */}
            <GridWrapper gridWidth={1}>
                <Plate noMin bordered>
                    {renderBalance("Current Token Balalance", current_balance, all_time_profit)}
                </Plate>
            </GridWrapper>
            <GridWrapper gridWidth={1}>
                <Plate noMin bordered>
                    {renderPerformer("Best Token Performer", bestVolumeUsd, bestVolumePerc, bestCoinName, bestCoinSymbol)}
                </Plate>
            </GridWrapper>
            <GridWrapper gridWidth={1}>
                <Plate noMin bordered>
                    {renderPerformer("Worst Token Performer", worstVolumeUsd, worstVolumePerc, worstCoinName, worstCoinSymbol)}
                </Plate>
            </GridWrapper>


            {/* ========= */}
            <GridWrapper gridWidth={1}>
                <Plate noMin bordered>
                    {renderBalance("Current NFT Balance", current_nft_balance, all_time_nft_profit)}
                </Plate>
            </GridWrapper>
            <GridWrapper gridWidth={1}>
                <Plate noMin bordered>
                    {renderPerformer("Best NFT performer", bestNftVolumeUsd, bestNftVolumePerc, bestNftName, bestNftCollection, bestNftUri)}
                </Plate>
            </GridWrapper>
            <GridWrapper gridWidth={1}>
                <Plate noMin bordered>
                    {renderPerformer("Worst NFT performer", worstNftVolumeUsd, worstNftVolumePerc, worstNftName, worstNftCollection, worstNftUri)}
                </Plate>
            </GridWrapper>
        </Grid>
    );
};

export default StatsAccount;
