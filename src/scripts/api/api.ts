export class Api {
    tokenString = "";

    base = process.env.BASE_HTTPS_URL;

    token = process.env.BASE_TOKEN;

    constructor(isToken: boolean = true) {
        if(isToken) this.tokenString = `?API_KEY=${this.token}`;
    }

    fetch = async (type: string, url: string, headers: HeadersInit, body: BodyInit = null) => {
        try {
            const init = {
                method: type,
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    ...headers
                },
                ...(body && { body })
            };
            const result: Response = await fetch(`${this.base}${url}${this.tokenString}`, init);
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

    post = async (url: string, headers: HeadersInit, body: BodyInit): Promise<Response> => { 
        return this.fetch("POST", url, headers, body).then(response => this.handleResponse(response));
    };

    get = async (url: string, headers: HeadersInit = {}): Promise<Response> => { 
        return this.fetch("GET", url, headers).then(response => this.handleResponse(response));
    };

   
}

