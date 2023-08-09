// React
import React, { useEffect } from "react";

// Redux
import { useDispatch } from "react-redux";
import { setHeaders } from "src/scripts/redux/slices/headersSlice";
import { setPageTitle } from "src/scripts/redux/slices/pageTitleSlice";

// API
import { accounts, nfts } from "src/scripts/api/requests";

// Components
import { NftPage } from "src/components/pages";
import { setAccountsWalletsData } from "src/scripts/redux/slices/accountsSlice";

const Nft = (data: IApiProps) => {
    const dispatch = useDispatch();
    useEffect(() => {
        console.log(data);
        dispatch(setHeaders(data.headers) || null);
        dispatch(setPageTitle("NFT"));
    }, [data, dispatch]);

    return <NftPage />;
};
export default Nft;

export async function getServerSideProps(context) {
    const { req } = context;

    return {
        props: {
            headers: req.headers,
            nfts: await nfts.getNftsData() || {},
        },
    };
}
