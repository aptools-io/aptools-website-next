import { AccountDiscord, AccountEmail, AccountSlack, AccountTelegram, AccountWhatsapp } from "src/components/svg";

const accountSocials = [
    /* {
        icon: <AccountTelegram />,
        login: "@username1244",
        title: "Telegram",
        onEdit: () => {
            console.log("test");
        }
    }, */
    /* {
        icon: <AccountWhatsapp />,
        login: "email@email.com",
        title: "WhatsApp",
        onEdit: () => {
            console.log("test");
        }
    }, */
    {
        icon: <AccountDiscord />,
        login: "@username1244",
        title: "Discord",
        type: "discord",
        onEdit: () => {
            console.log("test");
        }
    },
    /* {
        icon: <AccountSlack />,
        login: "@username1244",
        title: "Slack",
        onEdit: () => {
            console.log("test");
        }
    }, */
    {
        icon: <AccountEmail />,
        login: "email@email.com",
        title: "Email",
        type: "email",
        onEdit: () => {
            console.log("test");
        }
    }
];

export { accountSocials };
