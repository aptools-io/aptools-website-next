const categories = [
    {
        id: 0,
        title: "NFT"
    },
    {
        id: 1,
        title: "Token Notifications"
    }
];

const ruleType = [
    {
        title: "Receive transaction",
        value: "RECEIVE_TRANSACTION",
        inputs: {
            name: "",
            enabled: true,
            notifyBySlack: false,
            notifyByTelegram: true,
            notifyByEmail: true,
            notifyByDiscord: true,
            expiresIn: 6000,
            wallet: ""
        }
    },
    {
        title: "Execute transaction",
        value: "EXECUTE_TRANSACTION",
        inputs: {
            name: "",
            enabled: true,
            notifyBySlack: false,
            notifyByTelegram: true,
            notifyByEmail: true,
            notifyByDiscord: true,
            expiresIn: 6000,
            wallet: ""
        }
    },
    {
        title: "APT-USD Increases",
        value: "APT_USD_INCREASES",
        inputs: {
            name: "",
            enabled: true,
            notifyBySlack: false,
            notifyByTelegram: true,
            notifyByEmail: true,
            notifyByDiscord: true,
            expiresIn: 6000,
            usdAmount: "0"
        }
    },
    {
        title: "APT-USD Decreases",
        value: "APT_USD_DECREASES",
        inputs: {
            name: "",
            enabled: true,
            notifyBySlack: false,
            notifyByTelegram: true,
            notifyByEmail: true,
            notifyByDiscord: true,
            expiresIn: 6000,
            usdAmount: "0"
        }
    },
    {
        title: "Wallet amount increases",
        value: "WALLET_AMOUNT_INCREASES",
        inputs: {
            name: "",
            enabled: true,
            notifyBySlack: false,
            notifyByTelegram: true,
            notifyByEmail: true,
            notifyByDiscord: true,
            expiresIn: 6000,
            wallet: "",
            amount: "0"
        }
    },
    {
        title: "Wallet amount decreases",
        value: "WALLET_AMOUNT_DECREASES",
        inputs: {
            name: "",
            enabled: true,
            notifyBySlack: false,
            notifyByTelegram: true,
            notifyByEmail: true,
            notifyByDiscord: true,
            expiresIn: 6000,
            wallet: "",
            amount: "0"
        }
    },
    {
        title: "Wallet amount percentage increases",
        value: "WALLET_AMOUNT_PERCENTAGE_INCREASES",
        inputs: {
            name: "",
            enabled: true,
            notifyBySlack: false,
            notifyByTelegram: true,
            notifyByEmail: true,
            notifyByDiscord: true,
            expiresIn: 6000,
            wallet: "",
            amount: "0"
        }
    },
    {
        title: "Wallet amount percentage decreases",
        value: "WALLET_AMOUNT_PERCENTAGE_DECREASES",
        inputs: {
            name: "",
            enabled: true,
            notifyBySlack: false,
            notifyByTelegram: true,
            notifyByEmail: true,
            notifyByDiscord: true,
            expiresIn: 6000,
            wallet: "",
            amount: "0"
        }
    }
];

export { ruleType, categories };
