// React
import React, { useEffect, useState } from "react";

// Redux
import { useSelector } from "react-redux";
import { IRootState } from "src/scripts/redux/store";

// ECharts
import ReactECharts from "echarts-for-react";

// Styles
import classNames from "classnames";
import { Plug, Skeleton } from "src/components/ui";
import styles from "./ValidatorsMap.module.scss";

// Other
import chartOptions from "./data/chartOptions";
import { registerMap } from "echarts";
import { validators } from "src/scripts/api/requests";



const ValidatorsMap: React.FC<IComponent> = ({
    className 
}) => {
    const { validatorsLocations } = useSelector((state: IRootState) => state.validators);

    const classes = classNames([
        styles["validators-map"],
        className
    ]);

    return (
        <div className={classes}>
            {/* <strong className={"chart__title"}>Daily Active Wallets</strong> */}
            <div>
                {(validatorsLocations?.length > 0) ? 
                    <ReactECharts theme={""} option={chartOptions(validatorsLocations)} style={{height: "400px", width: "100%"}} /> : 
                    <Skeleton style={{height: "400px", width: "100%"}} />}
            </div>
        </div>
    );
};



export default ValidatorsMap;
