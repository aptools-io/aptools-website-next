// React
import React from "react";

// Styles
import styles from "./StatsValidator.module.scss";
import classNames from "classnames";

// Other
import moment from "moment";

// Util
import { parseTimestamp } from "src/scripts/util/timeConvert";

// Redux
import { useSelector } from "react-redux";
import { IRootState } from "src/scripts/redux/store";


const StatsValidator: React.FC<IComponent> = ({
    className 
}) => {
    const { data: realTimeData } = useSelector((state: IRootState) => state.statsAptos);
    const { data: generalData } = useSelector((state: IRootState) => state.statsGeneral);
    const { blockchain_info } = generalData || {};

    const { epoch, epoch_started } = realTimeData || {};
    const { total_staked, apt_reward }  = blockchain_info || {};

    const classes = classNames([
        styles["stats-validator"],
        className
    ]);

    const calculate = (started: number) => {
        const epochInterval = "7200000000";

        const startTimestamp = moment(started * 1000);
        const nowTimestamp = parseTimestamp(moment.now().toString());
        const timePassed = moment.duration(nowTimestamp.diff(startTimestamp));
        const timePassedInMin = timePassed.asMinutes();
        const epochIntervalInMin = moment.duration(parseInt(epochInterval) / 1000, "milliseconds").asMinutes();

        return {
            "timeRemaining": (epochIntervalInMin - timePassedInMin).toFixed(0),
            "percentage": parseInt(((timePassedInMin * 100) / epochIntervalInMin).toFixed(0))
        }; 
    };

    const calculated = calculate(epoch_started);

    return (
        <div className={classes}>
            <div className={"stats__item"}>
                <div className={"stats__item-wrapper"}>
                    <span className={"title"}>Epoch</span>
                    <span className={"info"}>{epoch}</span>
                </div>
                <div className={"stats__item-wrapper"}>
                    <div className={"range"}>
                        <b style={{ width: `${calculated.percentage < 10 ? 10 : calculated.percentage}%` }}>{calculated.timeRemaining}m</b>
                    </div>
                    <span className={"description"}>
                        <span>{calculated.percentage}% complete</span>
                    </span>
                </div>
            </div>
            <div className={"stats__item"}>
                <div className={"stats__item-wrapper"}>
                    <span className={"title"}>Total Staked</span>
                    <span className={"info"}>{total_staked}</span>
                </div>
                <div className={"stats__item-wrapper right"}>
                    <span className={"description"}>{apt_reward}% APT Reward</span>
                </div>
            </div>
        </div>
    );
};

export default StatsValidator;
