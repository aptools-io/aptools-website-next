// React
import React, { useState } from "react";

// Redux
import { useSelector } from "react-redux";
import { IRootState } from "src/scripts/redux/store";

// ECharts
import ReactECharts from "echarts-for-react";

// Components

// Styles
import classNames from "classnames";

// Other
import { Img, Plug, Skeleton } from "src/components/ui";
import { getImageFromApi } from "src/scripts/util/image";
import { formatNumber } from "src/scripts/util/numbers";
import { concatString } from "src/scripts/util/strings";
import useWindowSize from "src/scripts/hooks/useWindowSize";
import chartOptions from "./data/chartOptions";
import styles from "./InitialSupplyStats.module.scss";
import media from "./data/adaptive";

const InitialSupplyStats: React.FC<IComponent> = ({ className }) => {
    const data = [
        {
            title: "Community",
            value: 51.02,
            color: "#F1CE73"
        },
        {
            title: "Core Contributors",
            value: 19,
            color: "#ECA584"
        },
        {
            title: "Foundation",
            value: 16.5,
            color: "#87C4A3"
        },
        {
            title: "Investors",
            value: 13.48,
            color: "#8D9FE9"
        }
    ];

    const { width } = useWindowSize();
    const m = media(width) || {};

    const classes = classNames([styles["initial-supply-stats"], "chart", className]);

    return (
        <div className={classes}>
            <strong className={"chart__title normal"}>
                <span>Tokens Stats</span>
            </strong>
            <div className={styles["initial-supply-stats__inner"]}>
                <ReactECharts style={{ height: m, width: m }} theme={""} option={chartOptions(data)} />
            </div>
        </div>
    );
};

export default InitialSupplyStats;
