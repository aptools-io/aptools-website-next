import { Api } from "../api";

const registerPasswordMiddleware = async (token = null, password = null) => {
    const apiLogin = new Api(false, process.env.SITE_URL, "");
    const res = apiLogin.post(
        "/api/register",
        {},
        {},
        {
            token,
            password
        }
    ) as unknown;
    return res;
};

const walletMiddleware = async (nonce = null, message = null, signature = null, pubKey = null, login = false, connectWallet = false) => {
    const apiLogin = new Api(false, process.env.SITE_URL, "");
    const res = apiLogin.post(
        "/api/wallet",
        {},
        {},
        {
            nonce,
            message,
            signature,
            pubKey,
            login,
            connectWallet
        }
    ) as unknown;
    return res;
};

const loginMiddleware = async (email = null, password = null) => {
    const apiLogin = new Api(false, process.env.SITE_URL, "");
    const res = apiLogin.post(
        "/api/login",
        {},
        {},
        {
            email,
            password
        }
    ) as unknown;

    return res;
};

const getUserMiddleware = async () => {
    const apiLogin = new Api(false, process.env.SITE_URL, "");
    const res = apiLogin.post("/api/user", {}, {}, {}) as unknown;

    return res;
};

const walletAddApproval = async () => {
    const apiLogin = new Api(false, process.env.SITE_URL, "");
    const res = apiLogin.post("/api/wallet-approval", {}, {}, {}) as unknown;

    return res;
};

const setQuestionsMiddleware = async (data) => {
    const apiLogin = new Api(false, process.env.SITE_URL, "");
    const res = apiLogin.post(
        "/api/questions",
        {},
        {},
        {
            ...data
        }
    ) as unknown;

    return res;
};

const emailChangeMiddleware = async (email = null) => {
    const apiLogin = new Api(false, process.env.SITE_URL, "");
    const res = apiLogin.post(
        "/api/email-change",
        {},
        {},
        {
            email
        }
    ) as unknown;

    return res;
};

const emailChangeConfirmMiddleware = async (token = null) => {
    const apiLogin = new Api(false, process.env.SITE_URL, "");
    const res = apiLogin.post(
        "/api/email-change-confirm",
        {},
        {},
        {
            token
        }
    ) as unknown;

    return res;
};

const logoutMiddleware = async () => {
    const apiLogin = new Api(false, process.env.SITE_URL, "");
    const res = apiLogin.post("/api/logout", {}, {}, {}) as unknown;

    return res;
};

const auth = {
    registerPasswordMiddleware,
    setQuestionsMiddleware,
    walletMiddleware,
    loginMiddleware,
    getUserMiddleware,
    logoutMiddleware,
    emailChangeMiddleware,
    emailChangeConfirmMiddleware,
    walletAddApproval
};

export default auth;
