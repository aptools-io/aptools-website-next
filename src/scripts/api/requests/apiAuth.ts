import { Api } from "../api";

const registerEmail = async (email = null, agreeWithTerms = false, subscribeToNewsletter = false) => {
    const api = new Api(true, process.env.BASE_API_ACCOUNT_URL, "");
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

const auth = {
    registerEmail
};

export default auth;
