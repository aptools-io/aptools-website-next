// React
import { getCookie, setCookie } from "cookies-next";
import React, { useEffect, useRef } from "react";

// Components
import { AuthRecoveryPage } from "src/components/pages";
import { auth } from "src/scripts/api/requests";
import { IUserResponse, checkLogined } from "src/scripts/common/user";

const Recovery = (data: IApiProps) => {
    return <AuthRecoveryPage />;
};
export default Recovery;

export async function getServerSideProps(context) {
    if (await checkLogined(context, auth))
        return {
            redirect: {
                destination: "/account/profile",
                permanent: false
            }
        };
    return {
        props: {}
    };
}
