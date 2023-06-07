// React
import React from "react";

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
    console.log(dex_volumes)
   

    const classes = classNames([
        styles["dex-volume"],
        className
    ]);

    if(!dex_volumes) return <></>

    return (
        <div className={classes}>test
            <div className={styles["stats-transactions__inner"]}>
                <ReactECharts style={{height: "312px", width: "100%"}} theme={""} option={chartOptions(dex_volumes)} />
            </div>
        </div>
    );
};

export default DexVolume;
