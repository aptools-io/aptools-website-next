// React
import React from "react";

// Adaptive
import useWindowSize from "src/scripts/hooks/useWindowSize";
import media from "../data/adaptive";

// Components
import { Grid, GridWrapper } from "src/components/general";
import { TokenPrice, TokenSupplySchedule, TransactionHistory } from "src/components/charts";
import { InitalSupplyList, TopTokensVolumeList, TransactionsList } from "src/components/lists";
import { Plate, Title } from "src/components/ui";
import { ActiveUniqueAddresses } from "src/components/containers";


const MainPageToken: React.FC = () => {
    const { width } = useWindowSize();
    const mediaData = media(width);

    if(!width) return <></>;

    return (
        <Grid columns={3}>
            <GridWrapper gridWidth={1}>
                <TokenPrice />
            </GridWrapper>
            <GridWrapper gridWidth={1}>
                <TransactionHistory />
            </GridWrapper>
            <GridWrapper gridWidth={1}>
                <TopTokensVolumeList />
            </GridWrapper>
            <GridWrapper gridWidth={1}>
                <InitalSupplyList />
            </GridWrapper>
            <GridWrapper gridWidth={1}>
                <TokenSupplySchedule />
            </GridWrapper>
            <GridWrapper gridWidth={1}>
                <Plate>
                    <ActiveUniqueAddresses />
                </Plate>
            </GridWrapper>
            <GridWrapper gridWidth={3}>
                <TransactionsList />
            </GridWrapper>
        </Grid>
    );
};

export default MainPageToken;
