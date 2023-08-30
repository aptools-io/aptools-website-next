import { formatNumber } from "src/scripts/util/numbers";
import { shortenHashString } from "src/scripts/util/strings";
import { timeFull } from "src/scripts/util/timeConvert";

// Convert
const columnNames = [
    {
        key: "version",
        value: "version",
        headHideMobile: true,
        ownLink: "/transactions",
        underline: true
    },
    {
        key: "block",
        value: "Block",
        ownLink: "/blocks",
        underline: true
    },
    {
        key: "age",
        value: "Age",
        formatter: (v) => `${timeFull(v * 1000)}`
    },
    {
        key: "account",
        value: "Account",
        formatter: (v) => `${shortenHashString(v)}`,
        ownLink: "/accounts",
        headHideMobile: true,
        underline: true
    },
    {
        key: "activity_type",
        value: "Active type",
        headHideMobile: true
    },
    {
        key: "token_name",
        value: "Token name",
        headHideMobile: true
    },
    {
        key: "property_version",
        value: "Property ver.",
        right: true,
        headHideMobile: true
    },
    {
        key: "amount",
        value: "Amount",
        right: true
    }
];

// Columns
const columns = ["8%", "8%", "14%", "28%", "16%", "10%", "10%", "6%"];

export { columnNames, columns };
