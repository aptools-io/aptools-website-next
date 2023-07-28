
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
        "description": "coin",
        "headHideMobile": true
    },
    {
        "key": "balance",
        "value": "Balance",
        "description": "balanceUSD",
        "formatter": (v) => `${concatString(formatNumber(v, 4), "", " APT") }`,
        "descriptionFormatter": (v) => `${concatString(formatNumber(v), "$", "") }`,
        "headHideMobile": true
    },
    {
        "key": "wallet_percentage",
        "value": "Wallet Percentage",
        "formatter": (v) => `${concatString(formatNumber(v), "", "%") }`,
        "headHideMobile": true
    },
    {
        "key": "profitUSD",
        "value": "Profit",
        "description": "profit_percentage",
        "formatter": (v) => `${concatString(formatNumber(v), "", "$") }`,
        "descriptionFormatter": (v) => `${concatString(setSign(formatNumber(v)) , "", "%") }`,
        "headHideMobile": true
    },
    {
        "key": "timestamp",
        "value": "Last transaction",
        "formatter": (v) => `${timeAgo(v)}`,
        "headHideMobile": true
    }
];

// Columns
const columns = ["15%", "15%", "27.5%", "27.5%", "15%"];

export { columnNames, columns };