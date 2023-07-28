// React
import React from "react";

// Next
import { useRouter } from "next/router";

// Components
import { Account, StatsAccount } from "src/components/containers";
import { Grid, GridWrapper, Topper } from "src/components/general";
import { TransactionsList } from "src/components/lists";

const AccountsSinglePage: React.FC = () => {
    const router = useRouter();
    const title = router.query.id;
    return (
        <>
            <Topper backlink={"/accounts"} customTitle={title} />
            <StatsAccount />
            <Grid>
                <GridWrapper>
                    <Account />
                </GridWrapper>
            </Grid>
        </>
    );
};


export default AccountsSinglePage;
