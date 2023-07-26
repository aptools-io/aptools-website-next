
import { formatNumber, setSign } from "src/scripts/util/numbers";

// Styles
import classNames from "classnames";
import { concatString, shortenHashString } from "src/scripts/util/strings";
import { timeAgo } from "src/scripts/util/timeConvert";
import styles from "../AccountTokenPerformance.module.scss";

// Convert
const columnNames = [
    {
        "value": "Token",
        "key": "coin_name",
        "symbol": "coin",
        "description": "coin"
    },
    {
        "key": "balance",
        "value": "Balance",
        "description": "balanceUSD",
        "formatter": (v) => `${concatString(formatNumber(v), "", " APT") }`,
        "descriptionFormatter": (v) => `${concatString(formatNumber(v), "$", "") }`
    },
    {
        "key": "wallet_percentage",
        "value": "Wallet Percentage",
        "formatter": (v) => `${concatString(formatNumber(v), "", "%") }`,
    },
    {
        "key": "profitUSD",
        "value": "Profit",
        "description": "profit_percentage",
        "formatter": (v) => `${concatString(formatNumber(v), "", "$") }`,
        "descriptionFormatter": (v) => `${concatString(setSign(formatNumber(v, 5)) , "", "%") }`,
    },
    {
        "key": "timestamp",
        "value": "Last transaction",
        "formatter": (v) => `${timeAgo(v)}`,
    }
];

// Columns
const columns = ["15%", "15%", "27.5%", "27.5%", "15%"];

export { columnNames, columns };