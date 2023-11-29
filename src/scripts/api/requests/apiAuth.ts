import { IUserResponse, checkRefreshToken } from "src/scripts/common/user";
import { getCookie } from "cookies-next";
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

const addWallet = async (nonce = null, message = null, signature = null, pubKey = null, setRefreshToken: (refreshToken: string) => void = null, token: string = null) => {
    const api = new Api(false, process.env.BASE_API_ACCOUNT_URL, "", false, true);
    const data = api.post(
        "/api/auth/add/wallet/confirm",
        {
            Authorization: `Bearer ${token}`
        },
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

    const socialsData = api.get(
        "/api/notification-socials",
        {
            Authorization: `Bearer ${token}`
        },
        {},
        null
    ) as unknown;

    return {
        ...((await userData) as any),
        socials: await socialsData
    };
};

const setQuestions = async (token: string, context, data) => {
    const api = new Api(false, process.env.BASE_API_ACCOUNT_URL, "");
    const questions = api.patch(
        "/api/users/me/questionnaire",
        {
            Authorization: `Bearer ${token}`
        },
        {},
        {
            ...data
        }
    ) as unknown;

    const accessToken = await checkRefreshToken(await questions, context, auth);
    if (accessToken) {
        return setQuestions(accessToken, null, data);
    }
    return questions;
};

const setSocials = async (token: string, context, data) => {
    const api = new Api(false, process.env.BASE_API_ACCOUNT_URL, "");
    const socials = api.patch(
        "/api/notification-socials",
        {
            Authorization: `Bearer ${token}`
        },
        {},
        {
            ...data
        }
    ) as unknown;

    const accessToken = await checkRefreshToken(await socials, context, auth);
    if (accessToken) {
        return setSocials(accessToken, null, data);
    }
    return socials;
};

const setChangeEmail = async (token: string, context, email) => {
    const api = new Api(false, process.env.BASE_API_ACCOUNT_URL, "");
    const result = api.post(
        "/api/auth/change/email",
        {
            Authorization: `Bearer ${token}`
        },
        {},
        {
            email
        }
    ) as unknown;

    const accessToken = await checkRefreshToken(await result, context, auth);
    if (accessToken) {
        return setChangeEmail(accessToken, null, email);
    }
    return result;
};

const setChangeConfirmEmail = async (token: string, context, emailToken) => {
    const api = new Api(false, process.env.BASE_API_ACCOUNT_URL, "");
    const result = api.post(
        "/api/auth/change/email/confirm",
        {
            Authorization: `Bearer ${token}`
        },
        {},
        {
            token: emailToken
        }
    ) as unknown;

    const accessToken = await checkRefreshToken(await result, context, auth);
    if (accessToken) {
        return setChangeConfirmEmail(accessToken, null, emailToken);
    }
    return result;
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

const walletAddApproval = async (token: string, context) => {
    const api = new Api(false, process.env.BASE_API_ACCOUNT_URL, "", false, true);
    const data = api.post(
        "/api/auth/add/wallet",
        {
            Authorization: `Bearer ${token}`
        },
        {},
        null
    ) as unknown;

    const accessToken = await checkRefreshToken(await data, context, auth);
    if (accessToken) {
        return walletAddApproval(accessToken, null);
    }
    return data;
};

const createNotification = async (token: string, context, data) => {
    const api = new Api(false, process.env.BASE_API_ACCOUNT_URL, "");
    const create = api.post(
        "/api/notifications",
        {
            Authorization: `Bearer ${token}`
        },
        {},
        {
            ...data
        }
    ) as unknown;

    const accessToken = await checkRefreshToken(await create, context, auth);
    if (accessToken) {
        return createNotification(accessToken, null, data);
    }
    return create;
};
const updateNotification = async (token: string, context, data, id) => {
    const api = new Api(false, process.env.BASE_API_ACCOUNT_URL, "");
    const patch = api.patch(
        `/api/notifications/${id}`,
        {
            Authorization: `Bearer ${token}`
        },
        {},
        {
            ...data
        }
    ) as unknown;

    const accessToken = await checkRefreshToken(await patch, context, auth);
    if (accessToken) {
        return updateNotification(accessToken, null, data, id);
    }
    return patch;
};

const getNotification = async (token: string, context, data) => {
    const api = new Api(false, process.env.BASE_API_ACCOUNT_URL, "");
    const get = api.get(
        `/api/notifications/${data}`,
        {
            Authorization: `Bearer ${token}`
        },
        {},
        null
    ) as unknown;

    const accessToken = await checkRefreshToken(await get, context, auth);
    if (accessToken) {
        return getNotification(accessToken, null, data);
    }
    return get;
};

const getNotificationsWithTokens = async (context) => {
    const { req, res } = context || {};
    const accessToken = (await getCookie("accessToken", { req, res })) as string;
    const notifications = (await getNotifications(accessToken, context)) as IUserResponse;
    return {
        ...notifications
    };
};

const getNotifications = async (token: string, context) => {
    const api = new Api(false, process.env.BASE_API_ACCOUNT_URL, "");
    const get = api.get(
        "/api/notifications",
        {
            Authorization: `Bearer ${token}`
        },
        {},
        null
    ) as unknown;

    const accessToken = await checkRefreshToken(await get, context, auth);
    if (accessToken) {
        return getNotifications(accessToken, null);
    }
    return get;
};

const auth = {
    registerEmail,
    registerPassword,
    registerWallet,
    addWallet,
    setQuestions,
    setSocials,
    loginWallet,
    login,
    getUser,
    refreshToken,
    forgotPassword,
    setNewPassword,
    walletApproval,
    setChangeEmail,
    setChangeConfirmEmail,
    walletAddApproval,
    createNotification,
    updateNotification,
    getNotifications,
    getNotificationsWithTokens,
    getNotification
};

export default auth;
