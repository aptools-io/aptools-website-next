// React
import React, { useEffect } from "react";

// Redux
import { useDispatch } from "react-redux";
import { setHeaders } from "src/scripts/redux/slices/headersSlice";
import { setPageTitle } from "src/scripts/redux/slices/pageTitleSlice";

// API

// Components
import { AccountApiPage, AccountProfilePage } from "src/components/pages";
import { checkLogined } from "src/scripts/common/user";
import { auth } from "src/scripts/api/requests";
import getGeneralRequests from "src/scripts/api/generalRequests";
import { setUser } from "src/scripts/redux/slices/userSlice";
import { setApiKeys } from "src/scripts/redux/slices/userApiKeysSlice";

const Account = (data: IApiProps) => {
    const dispatch = useDispatch();
    useEffect(() => {
        console.log(data);
        dispatch(setHeaders(data.headers) || null);
        dispatch(setPageTitle("API"));
        dispatch(setUser(data.general?.user));
        dispatch(setApiKeys(data.apiKeys));
    }, [data, dispatch]);

    return <AccountApiPage />;
};
export default Account;

export async function getServerSideProps(context) {
    const { req } = context;

    const apiKeys = (await auth.getApiKeysWithTokens(context)) || {};
    if (!(await checkLogined(context, auth)).logined)
        return {
            redirect: {
                destination: "/auth/signin",
                permanent: false
            }
        };

    return {
        props: {
            general: await getGeneralRequests(context),
            apiKeys,
            headers: req.headers
        }
    };
}
