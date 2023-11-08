import { setCookie } from "cookies-next";
import type { NextApiRequest, NextApiResponse } from "next";
import { auth } from "src/scripts/api/requests";
import { IUserResponse } from "src/scripts/common/user";

type ResponseData = {
    status: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
    if (req.body) {
        const dataParsed = JSON.parse(req.body);
        const { nonce, message, signature, pubKey, login = false } = dataParsed || {};

        const fetch = login ? auth.loginWallet : auth.registerWallet;
        const promiseData = await fetch(nonce, message, signature, pubKey, (refreshToken) => {
            if (refreshToken) setCookie("refreshToken", refreshToken, { req, res, httpOnly: true });
        });

        const response = promiseData as IUserResponse;
        if (response.status === "error") {
            res.status(200).json(response);
        } else {
            const { response: promisedResponse } = response;

            const { data } = (await promisedResponse) || {};
            const { accessToken, user } = data || {};
            if (accessToken) setCookie("accessToken", accessToken, { req, res, httpOnly: true });

            res.status(200).json(await promisedResponse);
        }
    } else {
        res.status(200).json({ status: "error" });
    }
}
