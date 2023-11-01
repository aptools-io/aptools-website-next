// React
import { getCookie } from "cookies-next";
import React, { useEffect, useRef } from "react";
import { AuthConfirmPage } from "src/components/pages";
import { auth } from "src/scripts/api/requests";
import { IUserResponse, checkLogined } from "src/scripts/common/user";

const Confirm = () => {
    return <AuthConfirmPage forgot />;
};
export default Confirm;

export async function getServerSideProps(context) {
    const { query } = context;
    const { id } = query || {};

    if (await checkLogined(context, auth))
        return {
            redirect: {
                destination: "/account/profile",
                permanent: false
            }
        };

    if (!id)
        return {
            notFound: true
        };

    return {
        props: {}
    };
}
