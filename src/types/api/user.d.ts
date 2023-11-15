interface IApiUser {
    accessToken: string;
    user: {
        id: string;
        authType: string;
        email: string;
    };
}

interface IUser {
    status: string;
    data: {
        id: string;
        email: string;
        createdAt: string;
        wallet: string;
    };
}
