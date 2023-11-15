// React
import React, { useEffect } from "react";

// Redux
import { useDispatch } from "react-redux";
import { setHeaders } from "src/scripts/redux/slices/headersSlice";
import { setPageTitle } from "src/scripts/redux/slices/pageTitleSlice";
import { setNftsCollectionListInventories, setNftsCollectionList } from "src/scripts/redux/slices/nftsSlice";

// API
import { accounts, nfts } from "src/scripts/api/requests";

// Components
import { NftPage } from "src/components/pages";
import getGeneralRequests from "src/scripts/api/generalRequests";

const Nft = (data: IApiProps) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setHeaders(data.headers) || null);
        dispatch(setPageTitle("NFT List"));
        dispatch(setNftsCollectionList(data.nfts_collection_list));
        dispatch(setNftsCollectionListInventories(data.nfts_collection_inventories));
    }, [data, dispatch]);

    return <NftPage />;
};
export default Nft;

export async function getServerSideProps(context) {
    const { req } = context;

    const nftsCollectionList = (await nfts.getNftsCollectionListData()) || {};

    if (!nftsCollectionList)
        return {
            notFound: true
        };

    const { list } = (nftsCollectionList as IApiNftCollectionList) || {};

    const promises = list?.map((element) => nfts.getNftsCollectionInventoryData(0, 1, element?.creator_address, element?.name)) || [];
    const nftsCollectionInventories = (await Promise.all(promises)) || [];

    return {
        props: {
            general: await getGeneralRequests(context),
            headers: req.headers,
            nfts_collection_list: nftsCollectionList,
            nfts_collection_inventories: nftsCollectionInventories
        }
    };
}
