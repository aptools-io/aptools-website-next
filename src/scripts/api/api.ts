export class Api {
    isToken = false;

    base = process.env.BASE_API_URL;

    version = "/v1";

    token = process.env.BASE_TOKEN;

    constructor(isToken: boolean = true, custom: string = null, customVersion: string = null) {
        if(isToken) this.isToken = true;
        if(custom !== null) this.base = custom;
        if(customVersion !== null) this.version = customVersion;
    }

    fetch = async (
        type: string, 
        url: string, 
        headers: HeadersInit, 
        params: Record<string, any> = {}, 
        body: Record<string, any> | string = null
    ) => {
        try {
            const init = {
                method: type,
                headers: {
                    ...headers
                },
                ...(body && { body: JSON.stringify(body) })
            };

            const paramsString = new URLSearchParams({ ...params, ...this.isToken && { API_KEY: this.token } });
            const endpoint = `${this.base}${this.version}${url}${Object.keys(params)?.length > 0 ? `?${paramsString}` : ""}`;
            const result: Response = await fetch(endpoint, init);
            return result;
        }
        catch(error) {
            return error;
        }
    };

    handleResponse = (response) => { // eslint-disable-line class-methods-use-this
        if(response.status !== 201 && response.status !== 200 && response.status !== 204)
            return null;

        return response.json();
    };

    post = async (url: string, headers: HeadersInit, params: Record<string, any> = {}, body: Record<string, any> | string = null): Promise<Response> => { 
        return this.fetch("POST", url, headers, params, body).then(response => this.handleResponse(response));
    };

    get = async (url: string, headers: HeadersInit = {}, params: Record<string, any> = {}, body: Record<string, any> | string = null): Promise<Response> => { 
        return this.fetch("GET", url, headers, params).then(response => this.handleResponse(response));
    };

   
}

