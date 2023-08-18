// React
import React from "react";
import { Topper } from "src/components/general";
import { Tabs , CopyText } from "src/components/ui";
import NftTransfers from "src/components/lists/NftTransfersList/NftTransfersList";
import NftHolders from "src/components/lists/NftHoldersList/NftHoldersList";
import NftPending from "src/components/lists/NftPendingList/NftPendingList";
import NftInventory from "src/components/containers/NftInventory/NftInventory";

import { Nft, StatsNftHead } from "src/components/containers";
import styles from "./NftSinglePage.module.scss";

const NftSinglePage: React.FC = () => {

    return (
        <>
            <Topper backlink={"/nft"} />
            <StatsNftHead />
            <Nft />
        </>
    );
};

export default NftSinglePage;
