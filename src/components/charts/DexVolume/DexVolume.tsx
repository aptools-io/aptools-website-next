// React
import React, { useState } from "react";

// Redux
import { useSelector } from "react-redux";
import { IRootState } from "src/scripts/redux/store";

// ECharts
import ReactECharts from "echarts-for-react";

// Styles
import classNames from "classnames";
import styles from "./DexVolume.module.scss";

// Other
import chartOptions from "./data/chartOptions";

const DexVolume: React.FC<IComponent> = ({
    className 
}) => {
    const { data: generalData } = useSelector((state: IRootState) => state.statsGeneral);
    const { dex_volumes } = generalData || {};
    const [volume, setVolume] = useState(false); 

    const classes = classNames([
        styles["dex-volume"],
        className
    ]);

    if(!dex_volumes) return <></>;

    return (
        <div className={classes}>
            <strong className={"chart__title"}>
                <span>DEX Volume</span>
                {/* <span className={"chart__switcher"}>
                    <button className={classNames([ { ["active"]: volume } ])} onClick={() => setVolume(e => e = true)}>Volume</button>
                    <button className={classNames([ { ["active"]: !volume } ])} onClick={() => setVolume(e => e = false)}>TVL</button>
                </span> */}
            </strong>
            <div className={"chart__inner"}>
                <ReactECharts className={"chart__wrapper"} theme={""} notMerge={true} option={chartOptions(dex_volumes, volume)} />
            </div>
        </div>
    );
};

export default DexVolume;
