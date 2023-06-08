// React
import React from "react";

// Redux
import { useSelector } from "react-redux";
import { IRootState } from "src/scripts/redux/store";

// ECharts
import ReactECharts from "echarts-for-react";

// Styles
import classNames from "classnames";
import styles from "./DexTvl.module.scss";

// Other
import chartOptions from "./data/chartOptions";



const DexTvl: React.FC<IComponent> = ({
    className 
}) => {
    const { data: generalData } = useSelector((state: IRootState) => state.statsGeneral);
    const { dex_tvl } = generalData || {};
    
    const classes = classNames([
        styles["dex-tvl"],
        className
    ]);

    if(!dex_tvl) return <></>

    return (
        <div className={classes}>
            <strong className={"chart__title"}>DEX TVL</strong>
            <div className={"chart__inner"}>
                <ReactECharts style={{height: "352px", width: "100%"}} theme={""} option={chartOptions(dex_tvl)} />
            </div>
        </div>
    );
};

export default DexTvl;
