// React
import React from "react";
import { StatsAccounts } from "src/components/containers";
import { Grid, GridWrapper, Topper } from "src/components/general";
import { AccountsTopNftHoldersList } from "src/components/lists";
import { Plate } from "src/components/ui";

const AccountsNftValuePage: React.FC = () => {
    return (
        <>
            <Topper backlink={"/"} />
            <StatsAccounts />
            <Grid columns={3}>
                <GridWrapper gridWidth={3}>
                    <AccountsTopNftHoldersList />
                </GridWrapper>
            </Grid>
        </>
    );
};

export default AccountsNftValuePage;
