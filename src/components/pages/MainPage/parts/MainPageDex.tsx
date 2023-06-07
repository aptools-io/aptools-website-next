// React
import React from "react";

// Components
import { Grid, GridWrapper } from "src/components/general";
import { CategoryTitle } from "src/components/ui";
import { DexTvl, DexUniqueTransactions, DexUniqueWallets, DexVolume } from "src/components/charts";

const MainPageDex: React.FC = () => {

    return (
        <Grid>
            <GridWrapper>
                <CategoryTitle title={"DEX"} />
                <Grid columns={3}>
                    <GridWrapper gridWidth={1}>
                        <DexTvl />
                    </GridWrapper>
                    <GridWrapper gridWidth={1}>
                        <DexVolume />
                    </GridWrapper>
                    <GridWrapper gridWidth={1}>
                        a
                    </GridWrapper>
                    <GridWrapper gridWidth={1}>
                        <DexUniqueWallets />
                    </GridWrapper>
                    <GridWrapper gridWidth={1}>
                        <DexUniqueTransactions />
                    </GridWrapper>
                    <GridWrapper gridWidth={1}>
                        a
                    </GridWrapper>
                </Grid>
            </GridWrapper>
        </Grid>
    );
};

export default MainPageDex;
