// React
import React from "react";

// Styles
import styles from "./StatsValidator.module.scss";

// Other
import classNames from "classnames";


const StatsValidator: React.FC<IPlateProps> = ({
    className 
}) => {

    const classes = classNames([
        styles["stats-validator"],
        className
    ]);

    return (
        <div className={styles[classes]}>
            <div className={"stats__item"}>
                <div className={"stats__item-wrapper"}>
                    <span className={"title"}>Epoch</span>
                    <span className={"info"}>2664</span>
                </div>
                <div className={"stats__item-wrapper"}>
                    <div className={"range"}>
                        <b></b>
                    </div>
                    <span className={"description"}>
                        <span>58% complete</span>
                    </span>
                </div>
            </div>
            <div className={"stats__item"}>
                <div className={"stats__item-wrapper"}>
                    <span className={"title"}>Total Staked</span>
                    <span className={"info"}>878,614,979</span>
                </div>
                <div className={"stats__item-wrapper right"}>
                    <span className={"description"}>7% APT Reward</span>
                </div>
            </div>
        </div>
    )
}

export default StatsValidator;
