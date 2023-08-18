import { Tooltip } from "src/components/ui";
import { formatNumber } from "src/scripts/util/numbers";
import { shortenHashString } from "src/scripts/util/strings";
import { timeAgo, timeFull } from "src/scripts/util/timeConvert";

// Convert
const columnNames = [
    {
        key: "version",
        value: "version",
        headHideMobile: true,
        ownLink: "/transactions"
    },
    {
        key: "block",
        value: "Block",
        ownLink: "/blocks"
    },
    {
        key: "age",
        value: "Age",
        formatter: (v) => (
            <Tooltip text={timeAgo(v)}>{timeAgo(v, true)}</Tooltip>
        )
    },
    {
        key: "from",
        value: "From",
        formatter: (v) => `${shortenHashString(v)}`,
        ownLink: "/accounts",
        underline: true
    },
    {
        key: "to",
        value: "To",
        formatter: (v) => `${shortenHashString(v)}`,
        ownLink: "/accounts",
        underline: true
    },
    {
        key: "token_name",
        value: "Token name",
        headHideMobile: true
    },
    {
        key: "property_version",
        value: "Property Ver.",
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
