interface IApiUserNotification {
    createdAt: string;
    enabled: boolean;
    expirationDate: string;
    id: string;
    name: string;
    notifyByDiscord: boolean;
    notifyByEmail: boolean;
    notifyBySlack: boolean;
    notifyByTelegram: boolean;
    ruleType: string;
    type: string;
    updatedAt: string;
    wallet: string;
}

interface IApiUserNotifications {
    status: string;
    data: {
        meta: {
            total: number;
        };
        notifications: IApiUserNotification[];
    };
}
