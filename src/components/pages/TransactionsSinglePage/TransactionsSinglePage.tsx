// React
import React from "react";
import { Topper } from "src/components/general";
import { TransactionsList } from "src/components/lists";

const TransactionsSinglePage: React.FC = () => {

    return (
        <>
            <Topper backlink={"/transactions"} />
            test
            {/* <TransactionsList full title="" /> */}
        </>
    );
};


export default TransactionsSinglePage;
