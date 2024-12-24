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
        key: "timestamp",
        value: "##",
        formatter: (v) => `${timeFull(v / 1000)}`
    },
    {
        key: "version",
        value: "Version",
        defaultSort: true
    },
    {
        key: "type",
        value: "State",
        formatterComponent: (v) => {
            const type = getTransactionType(v);
            return <span className={classNames([styles.transaction__type, styles[type.color]])}>{type.name}</span>;
        }
    },
    {
        key: "sender",
        value: "Sender",
        formatter: (v) => `${shortenHashString(v)}`,
        link: "/transactions",
        mainMobile: true,
        underline: true
    },
    {
        key: "receiver",
        value: "Sent to",
        formatter: (v) => `${shortenHashString(v)}`,
        link: "/transactions",
        mainMobile: true,
        underline: true
    },
    {
        key: "function",
        value: "Function",
        formatter: (v) => `${shortenHashString(v)}`,
        link: "/transactions",
        mainMobile: true,
        underline: true
    },
    {
        key: "success",
        value: "Status",
        formatterComponent: (v) => {
            return <span className={classNames([styles.transaction__success, { [styles.error]: !v }])}>{v ? "Success" : "Cancel"}</span>;
        }
    },
    {
        key: "amount",
        value: "Amount/Gas",
        description: "gas_used",
        descriptionFormatter: (v) => `${concatString(v, "", " APT")}`,
        right: true,
        formatter: (v) => `${concatString(formatNumber(v), "", " APT")}`
    }
];
// Columns
const columnsDesktop = ["10%", "10%", "15%", "15%", "15%", "15%", "10%", "10%"];

export { columnNamesDesktop, columnsDesktop };
