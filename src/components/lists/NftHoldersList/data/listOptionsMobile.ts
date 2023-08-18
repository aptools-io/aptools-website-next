import { shortenHashString } from "src/scripts/util/strings";

// Convert
const columnNamesMobile = [
    {
        key: "rank",
        value: "",
        mainMobile: false,
    },
    {
        key: "owner",
        value: "",
        formatter: (v) => `${shortenHashString(v, [10, 10])}`,
        ownLink: "/accounts",
        underline: true,
    },
    {
        key: "amount",
        value: "",
        right: true,
        under: [
            {
                key: "percentage",
                value: "%",
                right: true,
                formatter: (v) => `${v}`,
                colorize: true,
            },
        ],
    },
];

// Columns
const columnsMobile = ["10%", "40%", "50%"];

export { columnNamesMobile, columnsMobile };
