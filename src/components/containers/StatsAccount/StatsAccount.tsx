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
import { CopyText, Img, Plate } from "src/components/ui";
import LinesEllipsis from "react-lines-ellipsis";
import responsiveHOC from "react-lines-ellipsis/lib/responsiveHOC";

// Utils
import { concatString } from "src/scripts/util/strings";
import { formatNumber, setSign } from "src/scripts/util/numbers";
import { Coins, Copy, CopyBig, Wallet } from "src/components/svg";
import { getImageFromApi } from "src/scripts/util/image";
import { getBaseHttpsUrl } from "src/scripts/util/data";
import useWindowSize from "src/scripts/hooks/useWindowSize";
import { copyText } from "src/scripts/util/copyText";
import { percentClass } from "src/scripts/util/classes";
import styles from "./StatsAccount.module.scss";
import media from "./data/adaptive";
import { timeFull } from "src/scripts/util/timeConvert";

const StatsAccount: React.FC<IComponent> = ({
    className 
}) => {
    const { width } = useWindowSize();
    const mediaData = media(width);

    const router = useRouter();
    const { query } = router;
    
    const { accountStats } = useSelector((state: IRootState) => state.accounts);
    const { 
        net_worth, 
        net_worth_diff,
        
        current_balance, 
        balance_diff,
        all_time_profit,
        
        best_performer,
        worst_performer,

        current_nft_balance,
        nft_balance_diff,
        all_time_nft_profit,

        best_nft_performer,
        worst_nft_performer,

        token_first_trx_timestamp,
        token_last_trx_timestamp,
        nft_first_trx_timestamp,
        nft_last_trx_timestamp
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

    if(!accountStats || !width) return <></>;
    
    const classes = classNames([
        styles["stats-accounts"],
        className
    ]);

    console.log(nft_first_trx_timestamp)


    const renderBalance = (title, balance, profit, balanceDiff, firstTrans, lastTrans) => {
        return (
            <>
                <div className={"stats__top"}>
                    <div className={"stats__top-wrapper"}>
                        <strong className={"stats__top-title"}>{title}</strong>
                    </div>
                    <div className={"stats__top-stats"}>
                        <span className={"title"}>{balance === "0.00" ? "-" : concatString(formatNumber(balance), "", "$")}</span>
                        {(balanceDiff && balanceDiff !== "0.0") && <span 
                            className={classNames([
                                "info", 
                                percentClass(balanceDiff, true)
                            ])}
                        >
                            {setSign(balanceDiff)}
                        </span>}
                    </div>
                </div>
                <div className={"stats__item"}>
                    <div className={"stats__item-wrapper"}>
                        <span className={"title"}>All-time profit</span>
                        <span className={"info percent"}>
                            {profit === "0.00" ? "-" : concatString(formatNumber(profit), "", "$")}
                            <span className={percentClass(profit)}>
                                {profit === "0.00" ? "-" : `${setSign(formatNumber(profit))}%`}
                            </span>
                        </span>
                    </div>
                </div>
                <div className={"stats__item"}>
                    <div className={"stats__item-wrapper wrap"}>
                        {(firstTrans !== 0 && firstTrans) && <div><span className={"title"}>First transaction</span>
                        <span className={"info additive"}>
                            <span className={"blue small"}>
                                {timeFull(firstTrans)}
                            </span>
                        </span></div>}
                        {(lastTrans !== 0 && lastTrans) && <div><span className={"title"}>Last transaction</span>
                        <span className={"info"}>
                            <span className={"blue small"}>
                                {timeFull(lastTrans)}
                            </span>
                        </span></div>}
                    </div>
                </div>
            </>
        );
    };

    const renderPerformer = (title, volume, percent, name = "", symbol = "", image = "", hideIfNegative = false) => {
        const hidePercent = hideIfNegative && (Number(volume) < 0 || Number(percent) < 0);
        return (
            <div className={"stats__wrapper"}>
                <div className={"stats__top"}>
                    <div className={"stats__top-wrapper"}>
                        <strong className={"stats__top-title"}>{title}</strong>
                    </div>
                </div>
                <div className={"stats__item"}>
                    {!hidePercent && <div className={"stats__item-wrapper"}>
                        <span className={"title"}>
                            <div className={"item-data"}>
                                <Img src={image ? `${process.env.BASE_IMAGES_URL}${image}` : getImageFromApi(symbol)} alt={name} />
                                <div className={"item-data__info"}>
                                    <strong>{name}</strong>
                                    <div>{symbol}</div>
                                </div>
                            </div>
                            
                        </span>
                        <span className={"info percent"}>
                            {volume === "" ? "-" : concatString(formatNumber(volume), "", "$")}
                            <span className={percentClass(percent)}>
                                {percent === "" ? "-" : concatString(setSign(formatNumber(percent)), "", "%")}
                            </span>
                        </span>
                    </div>}
                </div>
            </div>
        );
    };

    return (
        <Grid className={classes} columns={mediaData.accountStatsWrapper}>
            {/* ========= */}
            <GridWrapper gridWidth={mediaData.accountStatsNet}>
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
                            <span 
                                className={classNames([
                                    "info", 
                                    percentClass(net_worth_diff, true)
                                ])}
                            >
                                {setSign(net_worth_diff)}
                            </span>
                        </div>
                    </div>
                </Plate>
            </GridWrapper>
            <GridWrapper gridWidth={mediaData.accountStatsWallet}>
                <Plate noMin transparent>
                    <div className={"stats__top"}>
                        <div className={"stats__top-wrapper"}>
                            <div className={"stats__top-icon"}>
                                <Wallet />
                            </div>
                            <strong className={"stats__top-title blue bold"}>Wallet</strong>
                        </div>
                        <div className={"stats__top-stats row"}>
                            <span className={"title light m-left"}>
                                {mediaData.accountHash(query.id as string)}
                            </span>
                            <CopyText big text={query.id as string} />
                        </div>
                    </div>
                </Plate>
            </GridWrapper>


            {/* ========= */}
            <GridWrapper gridWidth={1}>
                <Plate noMin bordered>
                    {renderBalance("Current Token Balance", current_balance, all_time_profit, balance_diff, token_first_trx_timestamp, token_last_trx_timestamp)}
                </Plate>
            </GridWrapper>
            <GridWrapper gridWidth={1}>
                <Plate noMin bordered>
                    {renderPerformer("Best Token Performer", bestVolumeUsd, bestVolumePerc, bestCoinName, bestCoinSymbol, null, true)}
                </Plate>
            </GridWrapper>
            <GridWrapper gridWidth={1}>
                <Plate noMin bordered>
                    {renderPerformer("Worst Token Performer", worstVolumeUsd, worstVolumePerc, worstCoinName, worstCoinSymbol, null, false)}
                </Plate>
            </GridWrapper>


            {/* ========= */}
            <GridWrapper gridWidth={1}>
                <Plate noMin bordered>
                    {renderBalance("Current NFT Balance", current_nft_balance, all_time_nft_profit, nft_balance_diff, nft_first_trx_timestamp, nft_last_trx_timestamp)}
                </Plate>
            </GridWrapper>
            <GridWrapper gridWidth={1}>
                <Plate noMin bordered>
                    {renderPerformer("Best NFT Performer", bestNftVolumeUsd, bestNftVolumePerc, bestNftName, bestNftCollection, bestNftUri, true)}
                </Plate>
            </GridWrapper>
            <GridWrapper gridWidth={1}>
                <Plate noMin bordered>
                    {renderPerformer("Worst NFT Performer", worstNftVolumeUsd, worstNftVolumePerc, worstNftName, worstNftCollection, worstNftUri)}
                </Plate>
            </GridWrapper>
        </Grid>
    );
};

export default StatsAccount;
