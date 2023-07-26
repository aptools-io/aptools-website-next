// React
import React from "react";

// Redux
import { useSelector } from "react-redux";
import { IRootState } from "src/scripts/redux/store";

// ECharts
import ReactECharts from "echarts-for-react";

// Styles
import classNames from "classnames";
import { Plug } from "src/components/ui";
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

    return (
        <div className={classes}>
            <strong className={"chart__title"}>DEX TVL</strong>
            {dex_tvl ? <div className={"chart__inner"}>
                <ReactECharts className={"chart__wrapper"} theme={""} option={chartOptions(dex_tvl)} />
            </div> : <Plug noData />}
        </div>
    );
};

export default DexTvl;
