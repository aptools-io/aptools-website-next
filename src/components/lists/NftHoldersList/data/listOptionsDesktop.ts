import { formatNumber, setSign } from "src/scripts/util/numbers";
import { concatString, shortenHashString } from "src/scripts/util/strings";

// Convert
const columnNamesDesktop = [
    {
        key: "rank",
        value: "Rank",
    },
    {
        key: "owner",
        value: "Owner",
        formatter: (v) => `${shortenHashString(v, [10, 10])}`,
        ownLink: "/accounts",
        underline: true,
    },
    {
        key: "amount",
        value: "Amount",
        defaultSort: true,
        right: true,
    },
    {
        key: "percentage",
        value: "Percentage",
        formatter: (v) => `${concatString(formatNumber(v, 4), "", " %")}`,
        right: true,
    },
];

// Columns
const columnsDesktop = ["6.9%", "65.9%", "13.6%", "13.6%"];

export { columnNamesDesktop, columnsDesktop };
