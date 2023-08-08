// React
import React, { useEffect, useState } from "react";

// Redux
import { useSelector } from "react-redux";
import { IRootState } from "src/scripts/redux/store";

// Components
import { AccountsList } from "src/components/lists";
import { Plate, Skeleton, Tabs } from "src/components/ui";

// Styles
import classNames from "classnames";
import { Grid, GridWrapper, Topper } from "src/components/general";
import { ValidatorsMap } from "src/components/charts";
import { accounts } from "src/scripts/api/requests";
import { calculateValidatorsEpoch } from "src/scripts/util/timeConvert";
import { concatString } from "src/scripts/util/strings";
import { formatNumber } from "src/scripts/util/numbers";
import styles from "./Validators.module.scss";
import useWindowSize from "src/scripts/hooks/useWindowSize";
import media from "./data/adaptive";




const Validators: React.FC<IComponent> = ({
    className 
}) => {
    const { validatorsLocations, validators } = useSelector((state: IRootState) => state.validators);
    const { total_voting_power } = validators?.data || {};

    const [cities, setCities] = useState(0);
    const [countries, setCountries] = useState(0);

    const [lastReconfigurationTime, setLastReconfigurationTime] = useState(null);
    const [epochInterval, setEpochInterval] = useState(null);

    const [rewardsRate, setRewardsRate] = useState(null);
    const [rewardsRateDenominator, setRewardsRateDenominator] = useState(null);

    const [validatorsData, setValidatorsData] = useState({
        timeRemaining: null,
        percentage: null,
        rate: null
    });

    const { width } = useWindowSize();
    const mediaData = media(width);

    const classes = classNames([
        styles["validators"],
        className
    ]);

    useEffect(() => {
        if(validatorsLocations?.length > 0) {
            setCities([...new Set(validatorsLocations.map(item => item?.city))]?.length);
            setCountries([...new Set(validatorsLocations.map(item => item?.country))]?.length);
        }
    }, [validatorsLocations]);

    useEffect(() => {
        if(
            lastReconfigurationTime !== null || 
            epochInterval !== null || 
            rewardsRate !== null || 
            rewardsRateDenominator !== null
        ) return;

        accounts.getAccountResourceData("0x1", "0x1::reconfiguration::Configuration")
            .then((conf: unknown) => {
                const configuration = conf as IApiAccountResourceDetails;
                const { last_reconfiguration_time } = configuration?.data || {};
                setLastReconfigurationTime(last_reconfiguration_time);
            });
        accounts.getAccountResourceData("0x1", "0x1::block::BlockResource")
            .then((conf: unknown) => {
                const configuration = conf as IApiAccountResourceDetails;
                const { epoch_interval } = configuration?.data || {};
                setEpochInterval(epoch_interval);
            });
        accounts.getAccountResourceData("0x1", "0x1::staking_config::StakingConfig")
            .then((conf: unknown) => {
                const configuration = conf as IApiAccountResourceDetails;
                const { rewards_rate, rewards_rate_denominator } = configuration?.data || {};
                setRewardsRate(rewards_rate);
                setRewardsRateDenominator(rewards_rate_denominator);
            });
    }, []);

    useEffect(() => {
        if(lastReconfigurationTime === null || epochInterval === null || rewardsRate === null || rewardsRateDenominator === null) return;
        const calculate = () => setValidatorsData(calculateValidatorsEpoch(
            lastReconfigurationTime, 
            epochInterval, 
            rewardsRate, 
            rewardsRateDenominator)
        );
        calculate();
        setInterval(calculate, 60000);
    }, [lastReconfigurationTime, epochInterval]);

    if(!validatorsLocations || !width) return <></>;

    return (
        <div className={classes}>
            <Grid>
                <GridWrapper gridWidth={mediaData.validatorsLeft}>
                    <Topper backlink={"/"} />
                    <Grid>
                        <GridWrapper>
                            <Plate noMin min compressed>
                            <div className={"stats__item"}>
                                {validatorsLocations?.length && <div className={"stats__item-wrapper"}>
                                    <span className={"title"}>Nodes</span>
                                    <span className={"info break"}>{validatorsLocations?.length}</span>
                                </div>}
                                {countries && <div className={"stats__item-wrapper"}>
                                    <span className={"title"}>Countries</span>
                                    <span className={"info break"}>{countries}</span>
                                </div>}
                                {cities && <div className={"stats__item-wrapper"}>
                                    <span className={"title"}>Cities</span>
                                    <span className={"info break"}>{cities}</span>
                                </div>}
                            </div>
                            </Plate>
                        </GridWrapper>
                        <GridWrapper>
                            <Plate  noMin min compressed>
                                {(validatorsData?.timeRemaining !== null && validatorsData.percentage !== null) ? 
                                <div className={"stats__item-wrapper flex-start"}>
                                    <span className={"title"}>Epoch</span>
                                    <span className={"info break column"}>
                                        {concatString(validatorsData?.timeRemaining, "", " Minutes Remaining")}
                                        <span className={"success"}>{concatString(validatorsData?.percentage, "", "% complete")}</span>
                                    </span>
                                </div> : <Skeleton style={{ minHeight: 40 }} />}
                                {(total_voting_power !== null && validatorsData.rate !== null) ? <div className={"stats__item-wrapper flex-start"}>
                                    <span className={"title"}>Total</span>
                                    <span className={"info break column"}>
                                        {concatString(formatNumber(total_voting_power.slice(0, 9)), "", " APT")}
                                        <span className={"success"}>{concatString(validatorsData.rate, "", "% APY Reward")}</span>
                                    </span>
                                </div> : <Skeleton style={{ minHeight: 40 }} />}
                            </Plate>
                        </GridWrapper>
                    </Grid>
                </GridWrapper>
                {mediaData.validatorsRightVisible && <GridWrapper gridWidth={7}>
                    <ValidatorsMap />
                </GridWrapper>}
            </Grid>
        </div>
    );
};

export default Validators;
