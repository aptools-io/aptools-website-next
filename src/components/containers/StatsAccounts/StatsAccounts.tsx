// React
import React from "react";

// Styles
import classNames from "classnames";

// Redux
import { useSelector } from "react-redux";
import { IRootState } from "src/scripts/redux/store";

// Components
import { Grid, GridWrapper } from "src/components/general";
import { Plate } from "src/components/ui";

// Hooks
import useWindowSize from "src/scripts/hooks/useWindowSize";

// Util
import { formatNumber, numberShorter } from "src/scripts/util/numbers";
import styles from "./StatsAccounts.module.scss";

// Adaptive
import media from "./data/adaptive";



const StatsAccounts: React.FC<IComponent> = ({
    className 
}) => {
    const { accountsStats } = useSelector((state: IRootState) => state.accounts);
    const { top100, TotalSupply } = accountsStats || {};

    const { width } = useWindowSize();
    const mediaData = media(width);

    const classes = classNames([
        styles["stats-accounts"],
        className
    ]);

    return (
        <Grid className={classes} columns={mediaData.accountsWrapper}>
            <GridWrapper gridWidth={1}>
                <Plate dark noMin center>  
                    <div className={"stats__top adapt"}>
                        <div className={"stats__top-wrapper"}>
                            <strong className={"stats__top-title"}>Total Top 100 Aptos Value</strong>
                        </div>
                        <div className={"stats__top-stats"}>
                            <span className={"title blue"}>{top100}</span>
                        </div>
                    </div>
                </Plate>
            </GridWrapper>
            <GridWrapper gridWidth={1}>
                <Plate noMin center bordered>
                    <div className={"stats__top adapt"}>
                        <div className={"stats__top-wrapper"}>
                            <strong className={"stats__top-title"}>Total Apply Supply</strong>
                        </div>
                        <div className={"stats__top-stats"}>
                            <span className={"title blue"}>{numberShorter(TotalSupply, 2)}</span>
                        </div>
                    </div>
                </Plate>
            </GridWrapper>
        </Grid>
    );
};

export default StatsAccounts;
