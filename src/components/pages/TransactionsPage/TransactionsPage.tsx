// React
import React from "react";
import { Topper } from "src/components/general";
import { TransactionsList } from "src/components/lists";

const TransactionsPage: React.FC = () => {

    return (
        <>
            <Topper backlink={"/"} />
            <TransactionsList title="" />
        </>
    );
};


export default TransactionsPage;
