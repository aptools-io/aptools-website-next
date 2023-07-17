// React
import React from "react";

// Styles
import classNames from "classnames";

// Redux
import { useSelector } from "react-redux";
import { IRootState } from "src/scripts/redux/store";
import { formatNumber, numberShorter } from "src/scripts/util/numbers";
import styles from "./StatsAccounts.module.scss";

import { Grid, GridWrapper } from "src/components/general";
import { Plate } from "src/components/ui";


const StatsAccounts: React.FC<IComponent> = ({
    className 
}) => {
    const { accountsStats } = useSelector((state: IRootState) => state.accounts);
    const { top100, TotalSupply } = accountsStats || {};

    const classes = classNames([
        styles["stats-accounts"],
        className
    ]);

    return (
        <Grid columns={3}>
            <GridWrapper gridWidth={1}>
                <Plate dark noMin center>  
                    <div className={"stats__top"}>
                        <div className={"stats__top-wrapper"}>
                            <strong className={"stats__top-title"}>Total Top 100 Aptos Value</strong>
                        </div>
                        <div className={"stats__top-stats"}>
                            <span className={"title"}>{top100}</span>
                        </div>
                    </div>
                </Plate>
            </GridWrapper>
            <GridWrapper gridWidth={1}>
                <Plate noMin center>
                    <div className={"stats__top"}>
                        <div className={"stats__top-wrapper"}>
                            <strong className={"stats__top-title"}>Total Apply Supply</strong>
                        </div>
                        <div className={"stats__top-stats"}>
                            <span className={"title"}>{numberShorter(TotalSupply, 2)}</span>
                        </div>
                    </div>
                </Plate>
            </GridWrapper>
        </Grid>
    );
};

export default StatsAccounts;
