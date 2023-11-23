import { getCookie } from "cookies-next";
import React from "react";
import { auth } from "src/scripts/api/requests";
import { checkLogined } from "src/scripts/common/user";

const ChangeEmail = () => {
    return <></>;
};
export default ChangeEmail;

export async function getServerSideProps(context) {
    const { query, req, res } = context;
    const { id } = query || {};

    if ((await checkLogined(context, auth)).logined && id) {
        const accessToken = (await getCookie("accessToken", { req, res })) as string;
        const result = await auth.setChangeConfirmEmail(accessToken, context, id);
        return {
            redirect: {
                destination: `/account/profile?email=${result.status === "error" ? "error" : "success"}`,
                permanent: false
            }
        };
    }

    if (!id)
        return {
            notFound: true
        };

    return {
        props: {}
    };
}
