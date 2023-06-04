export function Api(token = true) {
    this.base = process.env.BASE_HTTPS_URL;
    this.token = process.env.BASE_TOKEN;
    this.tokenString = token ? `?API_KEY=${this.token}` : "";

    this.fetch = async (type: string, url: string, headers: HeadersInit, body: BodyInit) => {
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
            // console.log(error);
        }
    };

    this.post = async (url: string, headers: HeadersInit, body: BodyInit): Promise<Response> => { 
        return this.fetch("POST", url, headers, body);
    };

    this.get = async (url: string, headers: HeadersInit = {}): Promise<Response> => { 
        return this.fetch("GET", url, headers);
    };
}