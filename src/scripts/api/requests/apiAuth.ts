import { IUserResponse, checkRefreshToken } from "src/scripts/common/user";
import { Api } from "../api";

const registerEmail = async (email = null, agreeWithTerms = false, subscribeToNewsletter = false) => {
    const api = new Api(false, process.env.BASE_API_ACCOUNT_URL, "");
    return api.post(
        "/api/auth/register/email",
        {},
        {},
        {
            email,
            agreeWithTerms,
            subscribeToNewsletter
        }
    );
};

const forgotPassword = async (email = null) => {
    const api = new Api(false, process.env.BASE_API_ACCOUNT_URL, "");
    return api.post(
        "/api/auth/forgot/password",
        {},
        {},
        {
            email
        }
    );
};

const setNewPassword = async (token = null, password = null) => {
    const api = new Api(false, process.env.BASE_API_ACCOUNT_URL, "");
    return api.post(
        "/api/auth/forgot/password/confirm",
        {},
        {},
        {
            token,
            password
        }
    );
};

const registerPassword = async (token = null, password = null, setRefreshToken: (refreshToken: string) => void = null) => {
    const api = new Api(false, process.env.BASE_API_ACCOUNT_URL, "", false, true);
    const data = api.post(
        "/api/auth/register/password",
        {},
        {},
        {
            token,
            password
        }
    ) as unknown;

    const { refreshToken } = (await data) as { response: IUserResponse; refreshToken: string };
    setRefreshToken(refreshToken);
    return data;
};

const registerWallet = async (nonce = null, message = null, signature = null, pubKey = null, setRefreshToken: (refreshToken: string) => void = null) => {
    const api = new Api(false, process.env.BASE_API_ACCOUNT_URL, "", false, true);
    const data = api.post(
        "/api/auth/register/wallet",
        {},
        {},
        {
            nonce,
            pubKey,
            message,
            signature,
            agreeWithTerms: true
        }
    ) as unknown;

    const { refreshToken } = (await data) as { response: IUserResponse; refreshToken: string };
    setRefreshToken(refreshToken);
    return data;
};

const loginWallet = async (nonce = null, message = null, signature = null, pubKey = null, setRefreshToken: (refreshToken: string) => void = null) => {
    const api = new Api(false, process.env.BASE_API_ACCOUNT_URL, "", false, true);
    const data = api.post(
        "/api/auth/login/wallet",
        {},
        {},
        {
            nonce,
            pubKey,
            message,
            signature,
            agreeWithTerms: true
        }
    ) as unknown;

    const { refreshToken } = (await data) as { response: IUserResponse; refreshToken: string };
    setRefreshToken(refreshToken);
    return data;
};

const login = async (email = null, password = null, setRefreshToken: (refreshToken: string) => void = null) => {
    const api = new Api(false, process.env.BASE_API_ACCOUNT_URL, "", false, true);
    const data = api.post(
        "/api/auth/login",
        {},
        {},
        {
            email,
            password
        }
    ) as unknown;
    const { refreshToken } = ((await data) as { response: IUserResponse; refreshToken: string }) || {};
    setRefreshToken(refreshToken);
    return data;
};

const getUser = async (token: string, context) => {
    const api = new Api(false, process.env.BASE_API_ACCOUNT_URL, "");
    const userData = api.get(
        "/api/users/me",
        {
            Authorization: `Bearer ${token}`
        },
        {},
        null
    ) as unknown;

    const accessToken = await checkRefreshToken(await userData, context, auth);
    if (accessToken) {
        return getUser(accessToken, null);
    }
    return userData;
};

const setQuestions = async (token: string, context, data) => {
    const api = new Api(false, process.env.BASE_API_ACCOUNT_URL, "");
    const userData = api.patch(
        "/api/users/me/questionnaire",
        {
            Authorization: `Bearer ${token}`
        },
        {},
        {
            ...data
        }
    ) as unknown;

    const accessToken = await checkRefreshToken(await userData, context, auth);
    if (accessToken) {
        return getUser(accessToken, null);
    }
    return userData;
};

const refreshToken = async (refreshToken) => {
    const api = new Api(false, process.env.BASE_API_ACCOUNT_URL, "", false, true);
    const userData = api.post(
        "/api/auth/refresh",
        {
            Cookie: `refreshToken=${refreshToken}`
        },
        {},
        null
    ) as unknown;
    return userData;
};

const walletApproval = async () => {
    const api = new Api(false, process.env.BASE_API_ACCOUNT_URL, "", false, true);
    const data = api.post("/api/auth/wallet/approval", {}, {}, null) as unknown;
    return data;
};

const auth = {
    registerEmail,
    registerPassword,
    registerWallet,
    setQuestions,
    loginWallet,
    login,
    getUser,
    refreshToken,
    forgotPassword,
    setNewPassword,
    walletApproval
};

export default auth;
