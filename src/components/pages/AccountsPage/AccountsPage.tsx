// React
import React from "react";
import { Projects } from "src/components/containers";
import { Topper } from "src/components/general";
import { TransactionsList } from "src/components/lists";

const AccountsPage: React.FC = () => {

    return (
        <>
            <Topper backlink={"/"}/>
            <Projects />
        </>
    );
};


export default AccountsPage;
