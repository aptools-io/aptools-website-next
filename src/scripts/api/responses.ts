import { setCookies } from "cookies-next";

const returnResponse = (response, getRefreshToken) => {
    // eslint-disable-line class-methods-use-this
    if (response.status >= 500) throw new Error(`Error status code ${response.status} while fetching, url ${response.url} ${response?.status} ${response?.statusText}`);
    if (response.status === 429)
        return {
            status: "error",
            reason: "limit",
            message: response?.message || ""
        };
    if (response.status === 409)
        return {
            status: "error",
            reason: "conflict",
            message: response?.message || ""
        };
    if (response.status === 404)
        return {
            status: "error",
            reason: "not-found",
            message: response?.message || ""
        };
    if (response.status === 401)
        return {
            status: "error",
            reason: "unauthorized",
            message: response?.message || ""
        };
    if (response.status === 400)
        return {
            status: "error",
            reason: "bad-request",
            message: response?.message || ""
        };
    if (response.status !== 201 && response.status !== 200 && response.status !== 204) return null;

    if (!getRefreshToken) return response.json();

    const cookies = response.headers.getSetCookie()?.[0];
    let refreshToken = "";
    if (cookies && getRefreshToken) {
        const obj = cookies.split("; ").reduce((prev, current) => {
            const [name, ...value] = current.split("=");
            prev[name] = value.join("=");
            return prev;
        }, {});
        refreshToken = obj?.["refreshToken"] || "";
        return {
            response: response.json(),
            refreshToken
        };
    }
    return response.json();
};

export default returnResponse;
