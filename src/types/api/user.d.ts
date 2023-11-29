interface IApiUser {
    accessToken: string;
    user: {
        id: string;
        authType: string;
        email: string;
    };
}

interface IUser {
    socials: {
        data: {
            email: string;
            discord: string;
            slack: string;
        };
        status: string;
    };
    status: string;
    data: {
        id: string;
        email: string;
        createdAt: string;
        wallet: string;
    };
}
