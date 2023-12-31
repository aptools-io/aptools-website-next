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
import getGeneralRequests from "src/scripts/api/generalRequests";
import { setUser } from "src/scripts/redux/slices/userSlice";
import { authMiddleware } from "src/scripts/api/middleware";
import { setNotifications } from "src/scripts/redux/slices/userNotificationsSlice";

const Account = (data: IApiProps) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setHeaders(data.headers) || null);
        dispatch(setPageTitle("My Account"));
        dispatch(setUser(data.general?.user));
        dispatch(setNotifications(data.notifications));
    }, [data, dispatch]);

    return <AccountProfilePage />;
};
export default Account;

export async function getServerSideProps(context) {
    const { req } = context;

    const notifications = (await auth.getNotificationsWithTokens(context)) || {};
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
            notifications,
            headers: req.headers
        }
    };
}
