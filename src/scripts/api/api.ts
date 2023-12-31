/* import { logger } from "./requests"; */

import returnResponse from "./responses";

const loggerPost = async (type: string, title: string, info: string = null, avoidErrorRecursion: boolean = false) => {
    const api = new Api(false, process.env.BASE_API_LOGGER, null, avoidErrorRecursion);
    return api.post(
        "/errors/new",
        {
            Authorization: "Bearer a23ert*HJGJGHg@HHJ*KKLDFD*sNSFSDAAAa@12343455@HHJ*KKLDFDlmDFDSFS"
        },
        {},
        {
            serviceName: "AptoolsAnalyticsWebsite", // requeired
            timestamp: Math.floor(new Date().getTime() / 1000), // requeired
            errorType: type, // requeired
            env: process.env.BASE_LOGGER_ENV, // requeired
            errorTitle: title, // required,
            error: info,
            customData: "{}"
        }
    );
};

export class Api {
    isToken = false;

    base = process.env.BASE_API_URL;

    version = "/v1";

    token = process.env.BASE_TOKEN;

    avoidRecursion = false;

    getRefreshToken = false;

    constructor(isToken: boolean = true, custom: string = null, customVersion: string = null, avoidErrorRecursion: boolean = false, getRefreshToken: boolean = false) {
        if (isToken) this.isToken = true;
        if (custom !== null) this.base = custom;
        if (customVersion !== null) this.version = customVersion;
        this.avoidRecursion = avoidErrorRecursion;
        this.getRefreshToken = getRefreshToken;
    }

    fetch = async (type: string, url: string, headers: HeadersInit, params: Record<string, any> = {}, body: Record<string, any> | string = null) => {
        const controller = new AbortController();
        setTimeout(() => controller.abort(), 10000);

        const init = {
            method: type,
            headers: {
                ...headers,
                ...(this.base === process.env.BASE_API_URL ? { Authorization: process.env.BASE_API_AUTH } : {})
            },
            signal: controller.signal,
            ...(body && { body: JSON.stringify(body) })
        };

        const paramsObject = {
            ...params,
            ...(this.isToken ? { API_KEY: this.token } : {})
        };
        const paramsString = new URLSearchParams(paramsObject);
        const endpoint = `${this.base}${this.version}${url}${Object.keys(params)?.length > 0 ? `?${paramsString}` : ""}`;
        try {
            const result: Response = await fetch(endpoint, init);
            return result;
        } catch (error) {
            loggerPost("error", `${""}. Message: ${error.message}`, `Endpoint: ${endpoint}\n${error.stack}`, true);

            return error;
        }
    };

    handleResponse = async (response) => {
        return returnResponse(response, this.getRefreshToken);
    };

    post = async (url: string, headers: HeadersInit, params: Record<string, any> = {}, body: Record<string, any> | string = null): Promise<Response> => {
        return this.fetch("POST", url, headers, params, body).then((response) => this.handleResponse(response));
    };

    get = async (url: string, headers: HeadersInit = {}, params: Record<string, any> = {}, body: Record<string, any> | string = null): Promise<Response> => {
        return this.fetch("GET", url, headers, params, body).then((response) => this.handleResponse(response));
    };

    patch = async (url: string, headers: HeadersInit = {}, params: Record<string, any> = {}, body: Record<string, any> | string = null): Promise<Response> => {
        return this.fetch("PATCH", url, headers, params, body).then((response) => this.handleResponse(response));
    };
}
