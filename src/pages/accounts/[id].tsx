// React
import React, { useEffect, useRef } from "react";

// Redux
import { useDispatch } from "react-redux";
import { setHeaders } from "src/scripts/redux/slices/headersSlice";
import { setPageTitle } from "src/scripts/redux/slices/pageTitleSlice";

// Components
import { AccountsSinglePage } from "src/components/pages";


const AccountsId = (data: IApiProps) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setHeaders(data.headers) || null);
        dispatch(setPageTitle(""));
    }, [data, dispatch]);

    return <AccountsSinglePage />;
}; 
export default AccountsId;

export async function getServerSideProps(context) {
    const { req, query } = context;
    return { props: {
        "headers": req.headers,
    } };
}
