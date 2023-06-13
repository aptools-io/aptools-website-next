// React
import React from "react";

// Adaptive
import useWindowSize from "src/scripts/hooks/useWindowSize";

// Components
import { Grid, GridWrapper } from "src/components/general";
import { TokenStatistics, MoneyFlow } from "src/components/containers";
import { DailyActiveWallets, DailyNewWallets, DailyUsageWallets, DexTvl } from "src/components/charts";
import media from "../data/adaptive";


const MainPageListSwitchers: React.FC = () => {
    const { width } = useWindowSize();
    const mediaData = media(width);

    if(!width) return <></>;

    return (
        <Grid>
            <GridWrapper>
                <TokenStatistics />
            </GridWrapper>
            <GridWrapper>
                <MoneyFlow />
            </GridWrapper>
            <GridWrapper>
                <Grid columns={mediaData.listSwitchersWrapper}>
                    <GridWrapper gridWidth={1}>
                        <DailyActiveWallets />
                    </GridWrapper>
                    <GridWrapper gridWidth={1}>
                        <DailyNewWallets />
                    </GridWrapper>
                    <GridWrapper gridWidth={mediaData.listSwitchersWalletsUsage}>
                        <DailyUsageWallets />
                    </GridWrapper>
                </Grid>
            </GridWrapper>
            
        </Grid>
    );
};

export default React.memo(MainPageListSwitchers);
