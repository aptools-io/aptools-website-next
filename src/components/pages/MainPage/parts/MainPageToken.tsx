// React
import React from "react";

// Adaptive
import useWindowSize from "src/scripts/hooks/useWindowSize";

// Components
import { Grid, GridWrapper } from "src/components/general";
import { TokenPrice, TokenSupplySchedule, TransactionHistory } from "src/components/charts";
import { InitalSupplyList, TopTokensVolumeList, TransactionsList } from "src/components/lists";
import { Plate } from "src/components/ui";
import { ActiveUniqueAddresses } from "src/components/containers";

// Adaptive
import media from "../data/adaptive";


const MainPageToken: React.FC = () => {
    const { width } = useWindowSize();
    const mediaData = media(width);

    if(!width) return <></>;

    return (
        <Grid columns={mediaData.tokenWrapper}>
            <GridWrapper gridWidth={mediaData.tokenElements}>
                <TokenPrice />
            </GridWrapper>
            <GridWrapper gridWidth={mediaData.tokenElements}>
                <TransactionHistory />
            </GridWrapper>
            <GridWrapper gridWidth={mediaData.tokenElements}>
                <TopTokensVolumeList />
            </GridWrapper>
            <GridWrapper gridWidth={mediaData.tokenElements}>
                <InitalSupplyList />
            </GridWrapper>
            <GridWrapper gridWidth={mediaData.tokenElements}>
                <TokenSupplySchedule />
            </GridWrapper>
            <GridWrapper gridWidth={mediaData.tokenElements}>
                <Plate>
                    <ActiveUniqueAddresses />
                </Plate>
            </GridWrapper>
            <GridWrapper gridWidth={mediaData.tokenTransactions}>
                <TransactionsList />
            </GridWrapper>
        </Grid>
    );
};

export default React.memo(MainPageToken);
