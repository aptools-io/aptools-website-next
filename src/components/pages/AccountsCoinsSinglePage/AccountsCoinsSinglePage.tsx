// React
import React from "react";
import { Accounts, StatsAccounts } from "src/components/containers";
import { Grid, GridWrapper, Topper } from "src/components/general";
import { AccountsList, TransactionsList } from "src/components/lists";
import { Plate } from "src/components/ui";

const AccountsCoinsSinglePage: React.FC = () => {
    return (
        <>
            <Topper noLink={["coin"]} backlink={"/"} />
            <StatsAccounts />
            <Grid columns={3}>
                <GridWrapper gridWidth={3}>
                    <AccountsList staticCount={200} />
                </GridWrapper>
            </Grid>
        </>
    );
};

export default AccountsCoinsSinglePage;
