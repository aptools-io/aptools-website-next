// React
import { getCookie } from "cookies-next";
import React, { useEffect, useRef } from "react";
import { AuthConfirmPage } from "src/components/pages";
import { auth } from "src/scripts/api/requests";
import { IUserResponse, checkLogined } from "src/scripts/common/user";

const Account = () => {
    return <></>;
};
export default Account;

export async function getServerSideProps(context) {
    if ((await checkLogined(context, auth)).logined)
        return {
            redirect: {
                destination: "/account/api",
                permanent: false
            }
        };
    return {
        redirect: {
            destination: "/auth/signin",
            permanent: false
        }
    };
}
