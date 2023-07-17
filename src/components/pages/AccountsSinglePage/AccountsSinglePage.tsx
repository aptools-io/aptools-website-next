// React
import React from "react";

// Next
import { useRouter } from "next/router";

// Components
import { StatsAccount } from "src/components/containers";
import { Topper } from "src/components/general";
import { TransactionsList } from "src/components/lists";

const AccountsSinglePage: React.FC = () => {
    const router = useRouter();
    const title = router.query.id;
    return (
        <>
            <Topper backlink={"/accounts"} customTitle={title} />
            <StatsAccount />
        </>
    );
};


export default AccountsSinglePage;
