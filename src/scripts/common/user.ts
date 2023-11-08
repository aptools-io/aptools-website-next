import { getCookie, setCookie } from "cookies-next";
import { authMiddleware } from "../api/middleware";

export interface IUserResponse {
    status: string;
    data?: IApiUser;
    reason?: string;
    response?: Promise<IUserResponse>;
}

const loginUser = (response: IUserResponse, onSuccess: (success: (firstTime?: boolean) => void) => void) => {
    const { data } = response || {};
    const { accessToken, user } = data || {};
    if (!accessToken || !user) {
        return;
    }

    if (onSuccess)
        onSuccess(async (firstTime = false) => {
            if (firstTime) window.localStorage.setItem("firstTime", "true");
            window.localStorage.setItem("user", JSON.stringify(user));
        });
};

const logout = async (router, authMiddleware) => {
    await authMiddleware.logoutMiddleware();
    if (window?.localStorage) window.localStorage.removeItem("user");
    router.reload();
};

const checkLogined = async (context, auth) => {
    const { req, res } = context || {};
    const accessToken = (await getCookie("accessToken", { req, res })) as string;
    const refreshToken = (await getCookie("refreshToken", { req, res })) as string;
    const user = (await auth.getUser(accessToken, context)) as IUserResponse;
    return !!accessToken && !!refreshToken && user?.status === "ok";
};

const checkRefreshToken = async (data, context, auth) => {
    const { reason } = data || {};

    if (reason === "unauthorized" && context) {
        const { req, res } = context || {};
        const oldRefreshToken = (await getCookie("refreshToken", { req, res })) as string;
        const refreshedData = await auth.refreshToken(oldRefreshToken);
        const { refreshToken, response } = refreshedData as any;

        if (refreshToken) await setCookie("refreshToken", refreshToken, { req, res, httpOnly: true });
        const promisedResponse = await response;

        const { data: responseData } = promisedResponse || {};
        const { accessToken } = responseData || {};
        if (accessToken) await setCookie("accessToken", accessToken, { req, res, httpOnly: true });
        return accessToken;
    }
    return null;
};

export { loginUser, checkLogined, checkRefreshToken, logout };
