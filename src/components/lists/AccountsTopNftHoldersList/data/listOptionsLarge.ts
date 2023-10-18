import { formatNumber, setSign } from "src/scripts/util/numbers";
import { concatString, shortenHashString } from "src/scripts/util/strings";

// Convert
const columnNamesLarge = [
    {
        key: "rank",
        value: "Rank",
        defaultSort: true,
        defaultSortType: "asc"
    },
    {
        key: "address",
        value: "Address",
        formatter: (v) => `${shortenHashString(v)}`,
        ownLink: "/accounts"
    },
    {
        key: "amount",
        value: "NFT amount",
        formatter: (v) => `${concatString(formatNumber(v), "", " APT")}`
    },
    {
        key: "balanceUSD",
        value: "Balance in USD",
        formatter: (v) => `${concatString(formatNumber(v), "", "$")}`
    },
    {
        key: "maxPrice",
        value: "Max NFT price",
        formatter: (v) => `${concatString(formatNumber(v), "", " APT")}`
    },
    {
        key: "minPrice",
        value: "Min NFT price",
        formatter: (v) => `${concatString(formatNumber(v), "", " APT")}`
    }
];

// Columns
const columnsLarge = ["5%", "30%", "16.25%", "16.25%", "16.25%", "16.25%"];

export { columnNamesLarge, columnsLarge };
