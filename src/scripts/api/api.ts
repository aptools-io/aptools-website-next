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
            return result.json();
        }
        catch(error) {
            return error;
        }
    };

    post = async (url: string, headers: HeadersInit, body: BodyInit): Promise<Response> => { 
        return this.fetch("POST", url, headers, body);
    };

    get = async (url: string, headers: HeadersInit = {}): Promise<Response> => { 
        return this.fetch("GET", url, headers);
    };
}

