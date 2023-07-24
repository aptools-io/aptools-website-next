// React
import React from "react";

// Components
import { AccountPerformance, AccountTokenStats } from "src/components/charts";
import { Grid, GridWrapper } from "src/components/general";

// Styles
import classNames from "classnames";
import { AccountTokenPerformanceList } from "src/components/lists";
import styles from "./AccountOverview.module.scss";

const AccountOverview: React.FC<IComponent> = ({
    className 
}) => {

    const classes = classNames([
        styles["account-overview"],
        className
    ]);


    return (
        <div className={classes}>
            <Grid gap={46}>
                <GridWrapper gridWidth={4}>
                    <AccountPerformance />
                </GridWrapper>
                <GridWrapper gridWidth={6}>
                    <AccountTokenStats />
                </GridWrapper>
                <GridWrapper>
                    <AccountTokenPerformanceList />
                </GridWrapper>
            </Grid>
            
        </div>
    );
};

export default AccountOverview;
