// React
import React from "react";

// Adaptive
import useWindowSize from "src/scripts/hooks/useWindowSize";
import media from "../data/adaptive";

// Components
import { Grid, GridWrapper } from "src/components/general";
import { CategoryTitle, Plate, Title } from "src/components/ui";
import { Price } from "src/components/charts";
import { StatsActiveUsers, StatsTotalCenter, StatsTotalRight, StatsTransactions } from "src/components/containers";


const MainPageBlockchainStats: React.FC = () => {
    const { width } = useWindowSize();
    const mediaData = media(width);

    if(!width) return <></>;

    return (
        <Grid>
            <GridWrapper>
                <CategoryTitle title={"Blockchain Stats"} />
                <Grid columns={3}>
                    <GridWrapper gridWidth={3}>
                        <Plate dark min>
                            <Grid fullHeight columns={mediaData.totalInfo}>
                                <GridWrapper gridWidth={1}>
                                    <Title>Total info</Title>
                                </GridWrapper>
                                <GridWrapper gridWidth={1}>
                                    <StatsTotalCenter />
                                </GridWrapper>
                                <GridWrapper gridWidth={1}>
                                    <StatsTotalRight />
                                </GridWrapper>
                            </Grid>
                            <span/>
                        </Plate>
                    </GridWrapper>
                    <GridWrapper gridWidth={mediaData.totalInfoPrice}>
                        <Plate >
                            <Price />
                        </Plate>
                    </GridWrapper>
                    <GridWrapper gridWidth={mediaData.totalInfoPriceUnder}>
                        <Plate title={"Active Users"}>
                            <StatsActiveUsers />
                        </Plate>
                    </GridWrapper>
                    <GridWrapper gridWidth={mediaData.totalInfoPriceUnder}>
                        <Plate title={"Transactions"}>
                            <StatsTransactions />
                        </Plate>
                    </GridWrapper>
                </Grid>
            </GridWrapper>
        </Grid>
    );
};

export default React.memo(MainPageBlockchainStats);
