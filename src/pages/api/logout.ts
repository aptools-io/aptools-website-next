import { deleteCookie } from "cookies-next";
import type { NextApiRequest, NextApiResponse } from "next";
import { auth } from "src/scripts/api/requests";
import { IUserResponse } from "src/scripts/common/user";

type ResponseData = {
    status: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<IUserResponse>) {
    deleteCookie("accessToken", { req, res });
    deleteCookie("refreshToken", { req, res });

    res.status(200).json({ status: "ok" });
}
