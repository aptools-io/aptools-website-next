import { setCookie } from "cookies-next";
import type { NextApiRequest, NextApiResponse } from "next";
import { auth } from "src/scripts/api/requests";
import { IUserResponse } from "src/scripts/common/user";

type ResponseData = {
    status: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
    const dataParsed = JSON.parse(req.body);
    const { email, password } = dataParsed || {};
    const promiseData = await auth.login(email, password, (refreshToken) => {
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
}
