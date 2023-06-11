// React
import useTranslation from "next-translate/useTranslation";
import React from "react";

// Adaptive
import useWindowSize from "src/scripts/hooks/useWindowSize";
import media from "../data/adaptive";

// Components
import { Grid, GridWrapper } from "src/components/general";
import { Plate, Skeleton } from "src/components/ui";
import { StatsAptos, StatsBlockchainActivity, StatsValidator } from "src/components/containers";
import { StatsTransactions } from "src/components/charts";

const MainPageBannerBottom: React.FC = () => {
    const { t } = useTranslation("common");
    const { width } = useWindowSize();
    const mediaData = media(width);

    if(!width) return (
        <Grid columns={1}>
            <GridWrapper gridWidth={1}> 
                <Skeleton />
            </GridWrapper>
        </Grid>
    );
    return (
        <Grid columns={mediaData.stats}>
            <GridWrapper gridWidth={1}>
                <Plate>
                    <StatsAptos />
                </Plate>
            </GridWrapper>
            <GridWrapper gridWidth={1}>
                <Plate title={t("blockchain activity stats")}>
                    <StatsBlockchainActivity />
                </Plate>
            </GridWrapper>
            <GridWrapper gridWidth={mediaData.statsTransactions}>
                <Plate title={t("transactions per second")}>
                    <StatsTransactions />
                </Plate>
            </GridWrapper>
            {mediaData.statsAdditiveComponents()}
        </Grid>
    );
};

export default React.memo(MainPageBannerBottom);
