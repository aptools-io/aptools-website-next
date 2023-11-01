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

const logoutMiddleware = async () => {
    const apiLogin = new Api(false, process.env.SITE_URL, "");
    const res = apiLogin.post("/api/logout", {}, {}, {}) as unknown;

    return res;
};

const auth = {
    registerPasswordMiddleware,
    loginMiddleware,
    getUserMiddleware,
    logoutMiddleware
};

export default auth;
