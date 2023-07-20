// React
import React from "react";

// Redux
import { useSelector } from "react-redux";
import { IRootState } from "src/scripts/redux/store";

// Components
import { AccountPerformance, AccountTokenStats } from "src/components/charts";
import { Grid, GridWrapper } from "src/components/general";

// Styles
import classNames from "classnames";
import styles from "./AccountOverview.module.scss";
import { AccountTokenPerformanceList } from "src/components/lists";

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
