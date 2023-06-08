// React
import React from "react";

// Adaptive
import useWindowSize from "src/scripts/hooks/useWindowSize";
import media from "../data/adaptive";

// Components
import { Grid, GridWrapper } from "src/components/general";
import { CategoryTitle } from "src/components/ui";
import { DexTvl, DexUniqueTransactions, DexUniqueWallets, DexVolume } from "src/components/charts";
import { DexVolumeList, MarketsList, TopDexesList } from "src/components/lists";
import { AptosBanner } from "src/components/containers";


const MainPageDex: React.FC = () => {
    const { width } = useWindowSize();
    const mediaData = media(width);

    if(!width) return <></>;

    return (
        <Grid>
            <GridWrapper>
                <CategoryTitle title={"DEX"} />
                <Grid gap={0} columns={mediaData.dexesWrapper}>
                    <GridWrapper gridWidth={1}>
                        <DexTvl />
                    </GridWrapper>
                    <GridWrapper gridWidth={1}>
                        <DexVolume />
                    </GridWrapper>
                    <GridWrapper gridWidth={1}>
                        <DexVolumeList />
                    </GridWrapper>
                    <GridWrapper gridWidth={1}>
                        <DexUniqueWallets />
                    </GridWrapper>
                    <GridWrapper gridWidth={1}>
                        <DexUniqueTransactions />
                    </GridWrapper>
                    <GridWrapper gridWidth={1}>
                        <TopDexesList />
                    </GridWrapper>
                </Grid>
                <Grid>
                    <GridWrapper>
                        <AptosBanner />
                    </GridWrapper>
                </Grid>
                <Grid>
                    <GridWrapper>
                        <MarketsList />
                    </GridWrapper>
                </Grid>
                
            </GridWrapper>
        </Grid>
    );
};

export default MainPageDex;
