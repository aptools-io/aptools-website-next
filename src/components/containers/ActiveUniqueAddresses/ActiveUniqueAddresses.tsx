// React
import React, { useEffect, useState } from "react";

// Styles
import classNames from "classnames";

// Redux
import { useSelector } from "react-redux";
import { IRootState } from "src/scripts/redux/store";

// Util
import { formatNumber } from "src/scripts/util/numbers";

import { Grid, GridWrapper } from "src/components/general";
import styles from "./ActiveUniqueAddresses.module.scss";

const Stats: React.FC<{ "time": string }> = ({ time = "0" }) => {
    const { data: aptosStats } = useSelector((state: IRootState) => state.statsAptos);
    const { data: generalData } = useSelector((state: IRootState) => state.statsGeneral);
    const { blockchain_info } = generalData || {};
    const { slot_time_h = "0" } = blockchain_info || {};

    const { 
        slot = "0", 
        slot_time_m = "0",
    } = aptosStats || {};

    return (
        <div className={styles["active-unique-addresses__stats"]}>
            <div className={styles["active-unique-addresses__stat"]}>
                <span className={styles["title"]}>Slot</span>
                <span className={styles["info"]}>{formatNumber(slot)}</span>
            </div>
            <div className={styles["active-unique-addresses__stat"]}>
                <span className={styles["title"]}>Cluster time</span>
                <span className={styles["info"]}>{time}</span>
            </div>
            <div className={styles["active-unique-addresses__stat"]}>
                <span className={styles["title"]}>Slot time</span>
                <span className={classNames([styles["info"], styles["bold"]])}>{slot_time_m}<span>1min average</span></span>
            </div>
            <div className={styles["active-unique-addresses__stat"]}>
                <span className={styles["title"]}>Slot time</span>
                <span className={classNames([styles["info"], styles["bold"]])}>{slot_time_h}<span>1h average</span></span>
            </div>
        </div>
    );
};

const ActiveUniqueAddresses: React.FC<IComponent> = ({
    className 
}) => {
    const { data: generalData } = useSelector((state: IRootState) => state.statsGeneral);
    const { active_unique_addresses } = generalData || {};
    const { day = 0, week = 0, month = 0 } = active_unique_addresses || {};

    const [ currentTimestamp, setCurrentTimestamp ] = useState(new Date(new Date().getTime() + new Date().getTimezoneOffset() * 60000).toLocaleString()); 

    const classes = classNames([
        styles["active-unique-addresses"],
        className
    ]);

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date();
            setCurrentTimestamp(new Date(now.getTime() + now.getTimezoneOffset() * 60000).toLocaleString());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <>
            <div className={classes}>
                <div className={styles["active-unique-addresses__title-wrapper"]}>
                    <strong className={styles["active-unique-addresses__title"]}>Active Unique Addresses</strong>
                    <Grid gap={6} className={styles["active-unique-addresses__days"]} columns={3}>
                        <GridWrapper gridWidth={1} className={styles["active-unique-addresses__day"]}>
                            <div className={styles["title"]}>1 day</div>
                            <div className={styles["info"]}>{formatNumber(day)}</div>
                        </GridWrapper>
                        <GridWrapper gridWidth={1} className={styles["active-unique-addresses__day"]}>
                            <div className={styles["title"]}>7 days</div>
                            <div className={classNames([styles["info"], styles["black"]])}>{formatNumber(week)}</div>
                        </GridWrapper>
                        <GridWrapper gridWidth={1} className={styles["active-unique-addresses__day"]}>
                            <div className={styles["title"]}>30 days</div>
                            <div className={classNames([styles["info"], styles["blue"]])}>{formatNumber(month)}</div>
                        </GridWrapper>
                    </Grid>
                </div>
                <div className={styles["active-unique-addresses__title-wrapper"]}>
                    <strong className={styles["active-unique-addresses__title"]}>Live Cluster Stats</strong>
                    <Stats time={currentTimestamp} />
                </div>
            </div>
        </>
    );
};

export default ActiveUniqueAddresses;
