// React
import React, { useEffect } from "react";

// Redux
import { useDispatch } from "react-redux";
import { setHeaders } from "src/scripts/redux/slices/headersSlice";
import { setPageTitle } from "src/scripts/redux/slices/pageTitleSlice";

// API
import { accounts } from "src/scripts/api/requests";

// Components
import { NftPage } from "src/components/pages";
import { setAccountsWalletsData } from "src/scripts/redux/slices/accountsSlice";

const NFT = (data: IApiProps) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setHeaders(data.headers) || null);
        dispatch(setPageTitle("NFT"));
    }, [data, dispatch]);

    return <NftPage />;
};
export default NFT;

export async function getServerSideProps(context) {
    const { req } = context;

    return {
        props: {
            headers: req.headers,
        },
    };
}
