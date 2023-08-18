// React
import React from "react";

// Next
import { useRouter } from "next/router";

// Components
import { Grid, GridWrapper, Topper } from "src/components/general";
import { StatsAccount, StatsTransaction, Transaction } from "src/components/containers";
import { CopyText, Plate } from "src/components/ui";
import { useSelector } from "react-redux";
import { IRootState } from "src/scripts/redux/store";
import { transactionTypes } from "src/scripts/util/classes";
import classNames from "classnames";

const TransactionsSinglePage: React.FC = () => {
    const router = useRouter();
    const title = router.query.id;

    const { transaction } = useSelector((state: IRootState) => state.statsTransactions);
    const { version, type } = transaction || {};

    /* { ["success"]: type === "state_checkpoint_transaction" },
                                    { ["transaction"]: type === "user_transaction" },
                                    { ["block"]: type === "block_metadata_transaction" } */
    const types = {
        "state_checkpoint_transaction": "StateCheckout",
        "user_transaction": "UserTransaction",
        "block_metadata_transaction": "BlockMetedata"
    };
    
    return (
        <>
            <Topper 
                backlink={"/transactions"} 
                customTitle={title} 
                additiveTitle={` #${version} <span class="${classNames(transactionTypes(type).class)}">/${transactionTypes(type).types}</span>`}
            />
            <StatsTransaction />
            <Grid>
                <GridWrapper>
                    <Transaction />
                </GridWrapper>
            </Grid>
            {/* <TransactionsList full title="" /> */}
        </>
    );
};


export default TransactionsSinglePage;
