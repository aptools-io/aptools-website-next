// React
import React from "react";
import { DexSingle } from "src/components/charts";

// Compoenents
import { DexPairsList } from "src/components/lists";

const DexSinglePage: React.FC = () => {

    return (
        <>
            <DexSingle />
            <DexPairsList />
        </>
    );
};


export default DexSinglePage;
