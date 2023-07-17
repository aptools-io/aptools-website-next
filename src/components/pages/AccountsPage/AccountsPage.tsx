// React
import React from "react";
import { Projects } from "src/components/containers";
import { Grid, GridWrapper, Topper } from "src/components/general";
import { TransactionsList } from "src/components/lists";
import { Plate } from "src/components/ui";

const AccountsSinglePage: React.FC = () => {

    return (
        <>
            <Topper backlink={"/"}/>
            <Grid columns={3}>
                <GridWrapper gridWidth={1}>
                    <Plate dark>test</Plate>
                </GridWrapper>
                <GridWrapper gridWidth={1}>
                    <Plate>test</Plate>
                </GridWrapper>
            </Grid>
            test listing
        </>
    );
};


export default AccountsSinglePage;
