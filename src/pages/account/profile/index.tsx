// React
import React, { useEffect } from "react";

// Redux
import { useDispatch } from "react-redux";
import { setHeaders } from "src/scripts/redux/slices/headersSlice";
import { setPageTitle } from "src/scripts/redux/slices/pageTitleSlice";

// API

// Components
import { AccountProfilePage } from "src/components/pages";
import { checkLogined } from "src/scripts/common/user";
import { auth } from "src/scripts/api/requests";

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

    if (!(await checkLogined(context, auth)))
        return {
            redirect: {
                destination: "/auth/signin",
                permanent: false
            }
        };

    return {
        props: {
            headers: req.headers
        }
    };
}
