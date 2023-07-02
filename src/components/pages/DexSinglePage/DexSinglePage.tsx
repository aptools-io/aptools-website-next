// React
import React from "react";

// Compoenents
import { DexPairsList } from "src/components/lists";
import { DexSingle } from "src/components/charts";
import { Topper } from "src/components/general";

const DexSinglePage: React.FC = () => {
    return (
        <>
            <Topper backlink={"/dex"} />
            <DexSingle />
            <DexPairsList />
        </>
    );
};


export default DexSinglePage;
