// React
import { getCookie } from "cookies-next";
import React, { useEffect, useRef } from "react";
import { AuthSignUpPage } from "src/components/pages";
import { auth } from "src/scripts/api/requests";
import { IUserResponse, checkLogined } from "src/scripts/common/user";

const SignUp = () => {
    return <AuthSignUpPage />;
};
export default SignUp;

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
