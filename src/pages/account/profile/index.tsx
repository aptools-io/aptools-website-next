// React
import React, { useEffect } from "react";

// Redux
import { useDispatch } from "react-redux";
import { setHeaders } from "src/scripts/redux/slices/headersSlice";
import { setPageTitle } from "src/scripts/redux/slices/pageTitleSlice";

// API

// Components
import { AccountProfilePage } from "src/components/pages";

const Account = (data: IApiProps) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setHeaders(data.headers) || null);
        dispatch(setPageTitle("My Account"));
    }, [data, dispatch]);

    return <AccountProfilePage />;
};
export default Account;

export async function getServerSideProps(context) {
    const { req } = context;

    return {
        props: {
            headers: req.headers
        }
    };
}
