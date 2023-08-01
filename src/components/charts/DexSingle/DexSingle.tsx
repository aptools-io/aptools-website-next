// React
import React, { useEffect, useState } from "react";

// Redux
import { useSelector } from "react-redux";
import { IRootState } from "src/scripts/redux/store";

// ECharts
import ReactECharts from "echarts-for-react";

// Hooks
import useWindowSize from "src/scripts/hooks/useWindowSize";

// Components
import { DifferenceArrow } from "src/components/svg";
import { Grid, GridWrapper } from "src/components/general";

// Other
import { formatNumber, percentDifference, setSign } from "src/scripts/util/numbers";
import { concatString } from "src/scripts/util/strings";
import { dateDiffInDays } from "src/scripts/util/timeConvert";

// Styles
import classNames from "classnames";
import styles from "./DexSingle.module.scss";

// Other
import chartOptions from "./data/chartOptions";

// Adaptive
import media from "./data/adaptive";

const DexSingle: React.FC<IComponent> = ({
    className 
}) => {
    const { data: singleDexData } = useSelector((state: IRootState) => state.singleDex);
    const { tvl = [], total_24h_volume = [], total_24h_transactions = [] } = singleDexData || {};

    const [currentDexData, setCurrentDexData] = useState("tvl"); 
    const [dexData, setDexData] = useState({});
    const { width } = useWindowSize();
    const mediaData = media(width);

    const classes = classNames([
        styles["dex-single"],
        className
    ]);

    const [volume, setVolume] = useState("all"); 
    const [volumes, setVolumes] = useState({"7d": [], "14d": [],"30d": [], "all": dexData[currentDexData]}); 

    useEffect(() => {
        const lastTvl = tvl.slice(-2);
        const lastTotalVolume = total_24h_volume.slice(-2);
        const lastTotalTransactions = total_24h_transactions.slice(-2);

        setDexData({
            tvl: {
                name: "Total Value Locked",
                value: lastTvl?.[0]?.y || 0,
                percent: percentDifference(lastTvl?.[0]?.y as number, lastTvl?.[1]?.y as number),
                data: tvl
            },
            total_24h_volume: {
                name: "Total 24h Volume",
                value: lastTotalVolume?.[0]?.y || 0,
                percent: percentDifference(lastTotalVolume?.[0]?.y as number, lastTotalVolume?.[1]?.y as number),
                data: total_24h_volume
            },
            total_24h_transactions: {
                name: "Total 24h Transactions",
                value: lastTotalTransactions?.[0]?.y || 0,
                percent: percentDifference(lastTotalTransactions?.[0]?.y as number, lastTotalTransactions?.[1]?.y as number),
                data: total_24h_transactions
            }
        });
    }, [tvl, total_24h_volume, total_24h_transactions, ]);

    useEffect(() => {
        if(!dexData[currentDexData]?.data?.length) return;
        const dailyWalletsUsage = {"7d": [], "14d": [],"30d": [], "all": dexData[currentDexData]?.data} as IApiWalletsUsage;
        
        dexData[currentDexData].data.forEach(el => {
            if(dateDiffInDays(new Date(el.x), new Date()) <= 8) dailyWalletsUsage["7d"].push(el);
            if(dateDiffInDays(new Date(el.x), new Date()) <= 15) dailyWalletsUsage["14d"].push(el);
            if(dateDiffInDays(new Date(el.x), new Date()) <= 31) dailyWalletsUsage["30d"].push(el);
        });

        setVolumes(dailyWalletsUsage);
    }, [volume, dexData, currentDexData]);

    if(!currentDexData || !tvl || !total_24h_volume || !total_24h_transactions || !width) return <></>;
    const data = [
        {
            "name": dexData[currentDexData]?.name,
            "chart": volumes[volume]?.length ? [...volumes[volume]].slice(0, volumes[volume].length - 1) : []
        },
    ];

    const renderTab = (item, index) => {
        const {percent} = item[1];
        return (
            <li className={classNames([
                styles["dex-single__tab"],
                { [styles["active"]]: currentDexData === item[0] }
            ])} key={index} onClick={() => setCurrentDexData(item[0])}>
                <div className={styles["dex-single__tab-item"]}>
                    <strong>{item[1].name}</strong>
                    <span>{concatString(formatNumber(item[1].value), "", "")}</span>
                </div>
                <div className={styles["dex-single__tab-item"]}>
                    <span></span>
                    <span className={classNames([
                        styles["percent"],
                        { [styles["green"]]: percent >= 0 },
                        { [styles["red"]]: percent < 0 }
                    ])}><DifferenceArrow />{concatString(setSign(formatNumber(percent)), "", "%")}</span>
                </div>
            </li>
        );
    };

    return (
        <div className={classes}>
            <Grid columns={4}>
                <GridWrapper gridWidth={mediaData.tabs}>
                    <ul className={styles["dex-single__tabs"]}>
                        {Object.entries(dexData).map(renderTab)}
                    </ul>
                </GridWrapper>
                <GridWrapper gridWidth={mediaData.chart}>
                    <div className={styles["dex-single__inner"]}>
                        <strong className={"chart__title"}>
                            <span>{dexData[currentDexData]?.name}</span>
                            <span className={"chart__switcher"}>
                                <button className={classNames([ { "active": volume === "7d" } ])} onClick={() => { setVolume("7d"); }}>7D</button>
                                <button className={classNames([ { "active": volume === "14d" } ])} onClick={() => { setVolume("14d"); }}>14D</button>
                                <button className={classNames([ { "active": volume === "30d" } ])} onClick={() => { setVolume("30d"); }}>30D</button>
                                <button className={classNames([ { "active": volume === "all" } ])} onClick={() => { setVolume("all"); }}>ALL</button>
                            </span>
                        </strong>
                        <div className={"chart__inner"}>
                            <ReactECharts className={"chart__wrapper own-height"} style={{ height: "250px" }} theme={""} option={chartOptions(data)} />
                        </div>
                    </div>
                </GridWrapper>
            </Grid>
        </div>
    );
};

export default DexSingle;
