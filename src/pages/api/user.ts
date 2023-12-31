import { getCookie, setCookie } from "cookies-next";
import type { NextApiRequest, NextApiResponse } from "next";
import { auth } from "src/scripts/api/requests";
import { IUserResponse } from "src/scripts/common/user";

export default async function handler(req: NextApiRequest, res: NextApiResponse<IUserResponse>) {
    const accessToken = getCookie("accessToken", { req, res }) as string;
    const promiseData = (await auth.getUser(accessToken, { req, res })) as IUserResponse;

    const response = promiseData as IUserResponse;
    res.status(200).json(response);
}
