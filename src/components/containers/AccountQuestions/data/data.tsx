const questions = [
    {
        title: "What will you use Aptools for?",
        value: "usagePurpose",
        logo: (
            <svg xmlns='http://www.w3.org/2000/svg' width='144' height='106' viewBox='0 0 144 106' fill='none'>
                <path d='M121.088 83.0033V39.0968L3.2793 103V78.7835L140.72 3V103H101.448V83.0033H121.08H121.088Z' stroke='#DFE3EE' strokeWidth='6' strokeLinejoin='round' />
                <path d='M3.2793 103V78.7835L140.72 3' stroke='#3B5998' strokeWidth='6' strokeLinejoin='round' />
            </svg>
        ),
        radios: [
            {
                title: "Work",
                value: "WORK"
            },
            {
                title: "Personal",
                value: "PERSONAL"
            },
            {
                title: "Both",
                value: "BOTH"
            }
        ]
    },
    {
        title: "What is your main interest?",
        value: "mainInterest",
        logo: (
            <svg xmlns='http://www.w3.org/2000/svg' width='148' height='110' viewBox='0 0 148 110' fill='none'>
                <path d='M123.088 85.0033V41.0968L5.2793 105V80.7835L142.72 5V105H103.448V85.0033H123.08H123.088Z' stroke='#DFE3EE' strokeWidth='10' strokeLinejoin='round' />
                <path d='M5.2793 105V80.7835L142.72 5V105' stroke='#3B5998' strokeWidth='6' strokeLinejoin='round' />
            </svg>
        ),
        radios: [
            {
                title: "Finding NFT opportunities",
                value: "NFT_OPPORTUNITIES"
            },
            {
                title: "Finding DeFi opportunities",
                value: "DEFI_OPPORTUNITIES"
            },
            {
                title: "Macro view of the market",
                value: "MARKET_MACRO_VIEW"
            }
        ]
    },
    {
        title: "How experienced are you in blockchain and data analytics?",
        value: "blockchainExperienceLevel",
        logo: (
            <svg xmlns='http://www.w3.org/2000/svg' width='144' height='106' viewBox='0 0 144 106' fill='none'>
                <path d='M121.088 83.0033V39.0968L3.2793 103V78.7835L140.72 3V103H101.448V83.0033H121.08H121.088Z' stroke='#DFE3EE' strokeWidth='6' strokeLinejoin='round' />
                <path d='M3.2793 103V78.7835L140.72 3V103H101.448V83.0033' stroke='#3B5998' strokeWidth='6' strokeLinejoin='round' />
            </svg>
        ),
        radios: [
            {
                title: "Beginner",
                value: "BEGINNER"
            },
            {
                title: "Intermediate",
                value: "INTERMEDIATE"
            },
            {
                title: "Advanced",
                value: "ADVANCED"
            }
        ]
    },
    {
        title: "Where did you hear about us?",
        value: "sourceOfInformationAboutApp",
        logo: (
            <svg xmlns='http://www.w3.org/2000/svg' width='144' height='106' viewBox='0 0 144 106' fill='none'>
                <path d='M121.088 83.0033V39.0968L3.2793 103V78.7835L140.72 3V103H101.448V83.0033H121.08H121.088Z' stroke='#DFE3EE' strokeWidth='6' strokeLinejoin='round' />
                <path d='M121.088 39.0968V83.0033H121.08H101.448V103H140.72V3L3.2793 78.7835V103' stroke='#3B5998' strokeWidth='6' strokeLinejoin='round' />
            </svg>
        ),
        radios: [
            {
                title: "Social media (Twitter, YouTube, Linkedin)",
                value: "SOCIAL_MEDIA"
            },
            {
                title: "Word of mouth / referral",
                value: "REFERRAL"
            },
            {
                title: "Blog or publication",
                value: "BLOG_OR_PUBLICATION"
            },
            {
                title: "Google search",
                value: "SEARCH_ENGINE"
            },
            {
                title: "Conference / Event",
                value: "CONFERENCE_OR_EVENT"
            },
            {
                title: "Other",
                value: "OTHER"
            }
        ]
    },
    {
        title: "Unlock your special Aptools privileges!",
        description: "By sharing your Telegram and Discord ID below, you will gain direct access to our team of Aptools Specialists and your exclusive Aptools community. Our specialists are here to help you get the most out of Aptools and provide ongoing support along the way.",
        logo: (
            <svg xmlns='http://www.w3.org/2000/svg' width='145' height='106' viewBox='0 0 145 106' fill='none'>
                <path d='M121.588 83.0033V39.0968L3.7793 103V78.7835L141.22 3V103H101.948V83.0033H121.58H121.588Z' stroke='#DFE3EE' strokeWidth='6' strokeLinejoin='round' />
                <path d='M121.588 83.0033V39.0968L3.7793 103V78.7835L141.22 3V103H101.948V83.0033H121.58H121.588Z' stroke='#3B5998' strokeWidth='6' strokeLinejoin='round' />
            </svg>
        ),
        inputs: [
            {
                title: "Telegram",
                optional: true,
                placeholder: "Your Telegram ID (optional)",
                name: "telegramId"
            },
            {
                title: "Discord",
                optional: true,
                placeholder: "Your Discord username (optional)",
                name: "discordId"
            },
            {
                title: "WhatsApp",
                optional: true,
                placeholder: "WhatsApp chat ID (optional)",
                name: "whatsUpChatId"
            }
        ],
        optional: true
    }
];

export { questions };
