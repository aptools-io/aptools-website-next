import { getCookie, setCookie } from "cookies-next";
import type { NextApiRequest, NextApiResponse } from "next";
import { auth } from "src/scripts/api/requests";
import { IUserResponse } from "src/scripts/common/user";

type ResponseData = {
    status: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<IUserResponse>) {
    const accessToken = getCookie("accessToken", { req, res }) as string;

    const dataParsed = JSON.parse(req.body);
    const { active, validateIp, allowedIps } = dataParsed || {};
    const promiseData = await auth.createApiKey(accessToken, { req, res }, active, validateIp, allowedIps);

    const response = promiseData;
    res.status(200).json(response);
}
