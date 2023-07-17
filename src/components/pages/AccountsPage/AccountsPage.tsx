// React
import React from "react";
import { Projects, StatsAccounts } from "src/components/containers";
import { Grid, GridWrapper, Topper } from "src/components/general";
import { AccountsList, TransactionsList } from "src/components/lists";
import { Plate } from "src/components/ui";

const AccountsSinglePage: React.FC = () => {

    return (
        <>
            <Topper backlink={"/"}/>
            <StatsAccounts />
            <Grid columns={3}>
                <GridWrapper gridWidth={3}>
                    <AccountsList />
                </GridWrapper>
            </Grid>
            
        </>
    );
};


export default AccountsSinglePage;
