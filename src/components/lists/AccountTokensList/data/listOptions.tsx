
import { formatNumber, setSign } from "src/scripts/util/numbers";

// Styles
import classNames from "classnames";
import { concatString, shortenHashString } from "src/scripts/util/strings";
import styles from "../AccountTokenPerformance.module.scss";

// Convert
const columnNames = [
    {
        "key": "version",
        "value": "Version",
        "cantSort": true,
    },
    {
        "key": "block",
        "value": "Block",
        "cantSort": true,
    },
    {
        "key": "type",
        "value": "Type",
        "cantSort": true,
    },
    {
        "key": "coin_name",
        "value": "Coin",
        "symbol": "coin_symbol",
        "description": "coin_symbol",
        "cantSort": true,
    },
    {
        "key": "hash",
        "value": "Hash",
        "formatter": (v) => `${shortenHashString(v)}`,
        "cantSort": true,
    },
    {
        "key": "account",
        "value": "Account",
        "formatter": (v) => `${shortenHashString(v)}`,
        "cantSort": true,
    },
    {
        "key": "value",
        "value": "Value",
        "description": "value_usd",
        "formatter": (v) => `${formatNumber(v, 5)}`,
        "cantSort": true,
    },
    {
        "key": "fee",
        "value": "Txn fee",
        "formatter": (v) => `${formatNumber(v, 5)}`,
        "cantSort": true,
    },
    {
        "key": "profit_usd",
        "value": "Profit",
        "cantSort": true,
        "formatter": (v) => `${concatString(formatNumber(v, 5), "", "$") }`,
    },
    {
        "key": "timestamp",
        "value": "Timestamp",
        "cantSort": true,
    }
];

// Columns
const columns = ["7.25%", "7.25%", "5%", "10%", "15%", "15%", "10%", "10%", "10%", "10%"];

export { columnNames, columns };