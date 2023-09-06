// React
import React, { useEffect, useRef, useState } from "react";

// Redux
import { useSelector } from "react-redux";
import { IRootState } from "src/scripts/redux/store";

// ECharts
import ReactECharts from "echarts-for-react";

// Styles
import classNames from "classnames";
import { Plug, Skeleton } from "src/components/ui";
import { registerMap } from "echarts";
import { validators } from "src/scripts/api/requests";
import { Expand, Maximize, Minimize } from "src/components/svg";
import styles from "./ValidatorsMap.module.scss";

// Other
import chartOptions from "./data/chartOptions";

const ValidatorsMap: React.FC<IComponent> = ({ className }) => {
    const { validatorsLocations } = useSelector(
        (state: IRootState) => state.validators
    );
    const mapRef = useRef(null);
    const [zoom, setZoom] = useState(1.25);

    const classes = classNames([styles["validators-map"], className]);
    const handleFullscreen = () => {
        if (mapRef.current) {
            const canvas = mapRef.current.ele.querySelector("canvas");
            canvas.requestFullscreen();
        }
    };

    const handleMaximize = () => {
        setZoom((e) => e + 0.5);
    };

    const handleMinimize = () => {
        setZoom((e) => e - 0.5);
    };

    return (
        <div className={classes}>
            {/* <strong className={"chart__title"}>Daily Active Wallets</strong> */}
            <div>
                {validatorsLocations?.length > 0 ? (
                    <ReactECharts
                        ref={mapRef}
                        theme={""}
                        option={chartOptions(validatorsLocations, zoom)}
                        style={{ height: "480px", width: "100%" }}
                    />
                ) : (
                    <Skeleton style={{ height: "480px", width: "100%" }} />
                )}
            </div>
            <div className={styles["validators-map__buttons"]}>
                <button onClick={handleFullscreen}>
                    <Expand />
                </button>
                <button onClick={handleMaximize}>
                    <Maximize />
                </button>
                <button onClick={handleMinimize}>
                    <Minimize />
                </button>
            </div>
        </div>
    );
};

export default ValidatorsMap;
