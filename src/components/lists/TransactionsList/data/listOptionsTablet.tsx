// Utils
import { formatNumber } from "src/scripts/util/numbers";
import { concatString, shortenHashString } from "src/scripts/util/strings";
import { timeFull } from "src/scripts/util/timeConvert";
import { getTransactionType } from "src/scripts/util/transactions";

// Styles
import classNames from "classnames";
import styles from "../TransactionsList.module.scss";

// Convert
const columnNamesTablet = [
    {
        key: "timestamp",
        value: "##",
        formatter: (v) => `${timeFull(v / 1000)}`,
        descriptionFormatter: (v, row) => {
            return <span className={classNames([styles.transaction__success, { [styles.error]: !row.success }])}>{row.success ? "Success" : "Cancel"}</span>;
        }
    },
    {
        key: "version",
        value: "Version",
        defaultSort: true,
        link: "/transactions"
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
        mainMobile: true,
        underline: true
    },
    {
        key: "amount",
        value: "Amount/Gas",
        description: "gas_fee",
        descriptionFormatter: (v) => `${concatString(v, "", " APT")}`,
        right: true,
        formatter: (v) => `${concatString(formatNumber(v), "", " APT")}`
    }
];
// Columns
const columnsTablet = ["25%", "15%", "25%", "15%", "20%"];

export { columnNamesTablet, columnsTablet };
