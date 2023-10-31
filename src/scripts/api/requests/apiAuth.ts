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

const registerPassword = async (token = null, passowrd = null) => {
    const api = new Api(false, process.env.BASE_API_ACCOUNT_URL, "");
    return api.post(
        "/api/auth/register/password",
        {},
        {},
        {
            token,
            passowrd
        }
    );
};

const auth = {
    registerEmail,
    registerPassword
};

export default auth;
