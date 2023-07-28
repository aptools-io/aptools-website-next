// React
import React from "react";

// Components
import { AccountPerformance, AccountTokenStats } from "src/components/charts";
import { Grid, GridWrapper } from "src/components/general";

// Styles
import classNames from "classnames";
import { AccountTokenPerformanceList } from "src/components/lists";
import useWindowSize from "src/scripts/hooks/useWindowSize";
import styles from "./AccountOverview.module.scss";
import media from "./data/adaptive";

const AccountOverview: React.FC<IComponent> = ({
    className,
}) => {
    const { width } = useWindowSize();
    const mediaData = media(width);

    if(!width) return <></>;

    const classes = classNames([
        styles["account-overview"],
        className
    ]);


    return (
        <div className={classes}>
            <Grid gap={mediaData.accountGaps}>
                <GridWrapper gridWidth={mediaData.accountPerformance}>
                    <AccountPerformance />
                </GridWrapper>
                <GridWrapper gridWidth={mediaData.accountTokensStats}>
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
