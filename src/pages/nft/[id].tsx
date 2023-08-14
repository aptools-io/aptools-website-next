// React
import React, { useEffect } from "react";

// Redux
import { useDispatch } from "react-redux";
import { setHeaders } from "src/scripts/redux/slices/headersSlice";
import { setPageTitle } from "src/scripts/redux/slices/pageTitleSlice";

// Components
import { NftSinglePage } from "src/components/pages";
import { nfts } from "src/scripts/api/requests";
import { setNftsCollectionGeneralInfo, setNftsCollectionInventory, setNftsCollectionTransfers } from "src/scripts/redux/slices/nftsSlice";


const NftId = (data: IApiProps) => {
    const dispatch = useDispatch();
    useEffect(() => {
        const title = data.nfts_collection_general_info?.name;
        dispatch(setHeaders(data.headers) || null);
        dispatch(setPageTitle(title ? `${title} – NFT` : ""));
        dispatch(setNftsCollectionGeneralInfo(data.nfts_collection_general_info));
        dispatch(setNftsCollectionTransfers(data.nfts_collection_transfers));
        dispatch(setNftsCollectionInventory(data.nfts_collection_inventory))
    }, [data, dispatch]);

    return <NftSinglePage />;
};
export default NftId;

export async function getServerSideProps(context) {
    const { req, query } = context;

    const { id, name } = query || {};

    const generalInfo = await nfts.getNftsCollectionGeneralInfoData(id, name) || null;
    const transfers = await nfts.getNftsCollectionTransfersData(1, 10, id, name) || null;
    const inventory = await nfts.getNftsCollectionInventoryData(1, 1, id, name) || null;

    if(!generalInfo || !transfers || !inventory) return {
        notFound: true
    };

    return {
        props: {
            headers: req.headers,
            nfts_collection_general_info: generalInfo,
            nfts_collection_transfers: transfers,
            nfts_collection_inventory: inventory
        },
    };
}
