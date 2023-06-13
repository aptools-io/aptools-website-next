// React
import React, { useState } from "react";

// Redux
import { useSelector } from "react-redux";
import { IRootState } from "src/scripts/redux/store";

// ECharts
import ReactECharts from "echarts-for-react";

// Components
import { DifferenceArrowDouble } from "src/components/svg/index";

// Styles
import classNames from "classnames";
import { formatNumber } from "src/scripts/util/numbers";
import { concatString } from "src/scripts/util/strings";
import styles from "./Price.module.scss";

// Other
import chartOptions from "./data/chartOptions";


const Price: React.FC<IComponent> = ({
    className 
}) => {
    const { data: generalData } = useSelector((state: IRootState) => state.statsGeneral);
    const { blockchain_info } = generalData || {};
    const {
        low_high_price
    } = blockchain_info || {};

    const [range, setRange] = useState("7d"); 
    
    const { 
        high = 0, 
        high_btc = 0, 
        low = 0, 
        low_btc = 0, 
        prices = [] 
    } = low_high_price?.[range] || {};


    const classes = classNames([
        styles["price"],
        "chart",
        className
    ]);

    if(!blockchain_info || !low_high_price) return <></>;

    return (
        <div className={classes}>
            <strong className={"chart__title normal"}>
                <span>Price</span>
                <span className={"chart__switcher"}>
                    <button className={classNames([ { "active": range === "24h" } ])} onClick={() => setRange("24h")}>24H</button>
                    <button className={classNames([ { "active": range === "7d" } ])} onClick={() => setRange("7d")}>7D</button>
                    <button className={classNames([ { "active": range === "14d" } ])} onClick={() => setRange("14d")}>14D</button>
                </span>
            </strong>
            <div className={styles["price__inner"]}>
                <ReactECharts style={{height: "90px", width: "100%"}} theme={""} option={chartOptions(prices)} />
            </div>
            <div className={"chart__bottom absolute paddings"}>
                <div className={"chart__bottom-item-wrapper"}>
                    <span className={"title high"}><DifferenceArrowDouble /> High price</span>
                    <span className={"info"}>
                        {concatString(formatNumber(high), "$")}
                        <span>{concatString(high_btc, "", " BTC")}</span>
                    </span>
                </div>
                <div className={"chart__bottom-item-wrapper"}>
                    <span className={"title low"}><DifferenceArrowDouble /> Low price</span>
                    <span className={"info"}>
                        {concatString(formatNumber(low), "$")}
                        <span>{concatString(low_btc, "", " BTC")}</span>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Price;
