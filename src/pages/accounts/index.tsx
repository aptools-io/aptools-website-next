// React
import React, { useEffect } from "react";

// Redux
import { useDispatch } from "react-redux";
import { setHeaders } from "src/scripts/redux/slices/headersSlice";
import { setPageTitle } from "src/scripts/redux/slices/pageTitleSlice";

// Components
import { AccountsPage } from "src/components/pages";

const Accounts = (data: IApiProps) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setHeaders(data.headers) || null);
        dispatch(setPageTitle("Accounts"));
    }, [data, dispatch]);
    
    return <AccountsPage/>;
}
export default Accounts;

export async function getServerSideProps() {
    return { props: {
    } };
}
