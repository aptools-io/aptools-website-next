import { AccountDiscord, AccountEmail, AccountSlack, AccountTelegram, AccountWhatsapp, Edit, Letter, Unlock, WalletBig } from "src/components/svg";

const accountStats = [
    {
        icon: <Letter />,
        title: "email@email.com",
        onEdit: () => {
            console.log("test");
        }
    },
    {
        icon: <WalletBig />,
        title: "Connect wallet"
    },
    {
        icon: <Unlock />,
        title: "**************",
        onEdit: () => {
            console.log("test");
        }
    }
];

const accountSocials = [
    {
        icon: <AccountTelegram />,
        login: "@username1244",
        title: "Telegram",
        onEdit: () => {
            console.log("test");
        }
    },
    {
        icon: <AccountWhatsapp />,
        login: "email@email.com",
        title: "WhatsApp",
        onEdit: () => {
            console.log("test");
        }
    },
    {
        icon: <AccountDiscord />,
        login: "@username1244",
        title: "Discord",
        onEdit: () => {
            console.log("test");
        }
    },
    {
        icon: <AccountSlack />,
        login: "@username1244",
        title: "Slack",
        onEdit: () => {
            console.log("test");
        }
    },
    {
        icon: <AccountEmail />,
        login: "email@email.com",
        title: "Email",
        onEdit: () => {
            console.log("test");
        }
    }
];

export { accountStats, accountSocials };
