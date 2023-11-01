interface IApiUser {
    accessToken: string;
    user: {
        id: string;
        authType: string;
        email: string;
    };
}
