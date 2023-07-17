export class Api {
    isToken = false;

    base = process.env.BASE_HTTPS_URL;

    token = process.env.BASE_TOKEN;

    constructor(isToken: boolean = true, news: boolean = false) {
        if(isToken) this.isToken = true;
        if(news) this.base = process.env.BASE_NEWS_URL;
    }

    fetch = async (type: string, url: string, headers: HeadersInit, params: Record<string, any> = {}, body: BodyInit = null) => {
        try {
            const init = {
                method: type,
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    ...headers
                },
                ...(body && { body })
            };
            const paramsString = new URLSearchParams({ ...params, ...this.isToken && { API_KEY: this.token } });
            const result: Response = await fetch(`${this.base}${url}?${paramsString}`, init);
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

    post = async (url: string, headers: HeadersInit, params: Record<string, any> = {}, body: BodyInit = null): Promise<Response> => { 
        return this.fetch("POST", url, headers, params, body).then(response => this.handleResponse(response));
    };

    get = async (url: string, headers: HeadersInit = {}, params: Record<string, any> = {}, body: BodyInit = null): Promise<Response> => { 
        return this.fetch("GET", url, headers, params).then(response => this.handleResponse(response));
    };

   
}

