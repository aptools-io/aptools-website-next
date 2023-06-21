// Utils
import { formatNumber } from "src/scripts/util/numbers";
import { concatString, shortenHashString } from "src/scripts/util/strings";
import { timeFull } from "src/scripts/util/timeConvert";
import { getTransactionType } from "src/scripts/util/transactions";

// Styles
import classNames from "classnames";
import styles from "../TransactionsList.module.scss";

// Convert
const columnNamesDesktop = [
    {
        "key": "timestamp",
        "value": "##",
        "formatter": (v) => `${timeFull(v)}`
    },
    {
        "key": "version",
        "value": "Version",
        "defaultSort": true
    },
    {
        "key": "type",
        "value": "State",
        "formatterComponent": (v) => {
            const type = getTransactionType(v);
            return (
                <span className={classNames([
                    styles["transaction__type"],
                    styles[type.color]
                ])}>{type.name}</span>
            );
        }
    },
    {
        "key": "hash",
        "value": "Transaction",
        "formatter": (v) => `${shortenHashString(v)}`,
        "link": "/transactions",
        "mainMobile": true,
        "underline": true
    },
    {  
        "key": "success",
        "value": "Status",
        "formatterComponent": (v) => {
            return (
                <span className={classNames([
                    styles["transaction__success"],
                    { [styles["error"]]: !v }
                ])}>{v ? "Success" : "Cancel"}</span>
            );
        }
    },
    {  
        "key": "gas_used",
        "value": "Gas",
        "right": true,
        "formatter": (v) => `${concatString(v, "", " APT")}`
    },
    {  
        "key": "amount",
        "value": "Amount",
        "right": true,
        "formatter": (v) => `${concatString(formatNumber(v), "", " APT")}`
    },
];
// Columns
const columnsDesktop = ["15%", "10%", "15%", "15%", "10%", "25%", "10%"];

export { columnNamesDesktop, columnsDesktop };