// React
import React, { useEffect, useState } from "react";

// Styles
import classNames from "classnames";

// Redux
import { useSelector } from "react-redux";
import { IRootState } from "src/scripts/redux/store";

// Public

// Util
import { timerFrom } from "src/scripts/util/timeConvert";
import { formatNumber, setSign } from "src/scripts/util/numbers";
import aptos from "../../../../public/static/images/svg/aptos.svg";
import styles from "./StatsAptos.module.scss";

const TopStats = () => {
    const { data: aptosStats } = useSelector((state: IRootState) => state.statsAptos);
    const { 
        price_usd = "0", 
        price_diff_usd = "0", 
        price_btc = "0", 
        price_diff_btc = "0" 
    } = aptosStats || {};

    const priceClass = (number: string) => {
        const negative = Number(number) < 0 || Number.isNaN(number);
        return classNames([
            "additive",
            ...negative ? ["negative"] : []
        ]);
    };
    
    return (<>
        <span className={"title"}>${formatNumber(price_usd)} 
            <span className={priceClass(price_diff_usd)}>
                {setSign(formatNumber(price_diff_usd))}%
            </span>
        </span>
        <span className={"info"}>{price_btc} BTC 
            <span className={priceClass(price_diff_btc)}>
                {setSign(formatNumber(price_diff_btc))}%
            </span>
        </span>
    </>);
};

const StatsAptos: React.FC<IComponent> = ({
    className 
}) => {
    const { data: generalData } = useSelector((state: IRootState) => state.statsGeneral);

    const { blockchain_info, token_statistics } = generalData || {};
    const { market_cap, vol_24h = 0, launched = 0 } = blockchain_info || {};
    const [ currentTimestamp, setCurrentTimestamp ] = useState(new Date().getTime()); 

    const totalHolders = token_statistics?.["24h"]
        ?.tokens_by_total
        ?.find(el => el.symbol === "APT").number || 0;

    const classes = classNames([
        styles["stats-aptos"],
        className
    ]);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTimestamp(new Date().getTime());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <>
            <div className={"stats__top"}>
                <div className={"stats__top-wrapper"}>
                    <img className={"stats__top-image"} src={aptos.src} alt={"aptos"} />
                    <strong className={"stats__top-title"}>Aptos</strong>
                </div>
                <div className={"stats__top-stats"}>
                    <TopStats />
                </div>
            </div>
            <div className={classes}>
                <div className={"stats__item"}>
                    <div className={"stats__item-wrapper"}>
                        <span className={"title"}>Market Cap</span>
                        <span className={"info"}>${formatNumber(market_cap / 1000000000)}B</span>
                    </div>
                    <div className={"stats__item-wrapper"}>
                        <span className={"title"}>Volume 24h</span>
                        <span className={"info"}>${formatNumber(vol_24h / 1000000)}M</span>
                    </div>
                    <div className={"stats__item-wrapper"}>
                        <span className={"title"}>Total Holders</span>
                        <span className={"info"}>{formatNumber(totalHolders)}</span>
                    </div>
                </div>
                <div className={"stats__item"}>
                    <div className={"stats__item-wrapper emphasis"}>
                        <span className={"title"}>Launched</span>
                        <span className={"info"}>{timerFrom(launched, currentTimestamp)}</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default StatsAptos;
