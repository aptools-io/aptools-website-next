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
    const { id, ...data } = dataParsed || {};
    const promiseData = await auth.updateNotification(accessToken, { req, res }, data, id);

    const response = promiseData;
    res.status(200).json(response);
}
