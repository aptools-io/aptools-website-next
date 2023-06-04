// React
import React from "react";

// Styles
import styles from "./StatsBlockchainActivity.module.scss";

// Other
import classNames from "classnames";


const StatsBlockchainActivity: React.FC<IPlateProps> = ({
    className 
}) => {

    const classes = classNames([
        styles["stats-blockchain-activity"],
        className
    ]);

    return (
        <div className={classes}>
            <div className={"stats__item"}>
                <div className={"stats__item-wrapper"}>
                    <span className={"title"}>Contracts deployers <span>24h / peak</span></span>
                    <span className={"info"}>6 / <span>186</span></span>
                </div>
                <div className={"stats__item-wrapper"}>
                    <span className={"title"}>User Transactions <span>24h / peak</span></span>
                    <span className={"info"}>148,517 / <span>1,702,123</span></span>
                </div>
                <div className={"stats__item-wrapper"}>
                    <span className={"title"}>Peak TPS  <span>real time / peak in 30 days</span></span>
                    <span className={"info"}>12 / <span>208</span></span>
                </div>
            </div>
        </div>
    )
}

export default StatsBlockchainActivity;
