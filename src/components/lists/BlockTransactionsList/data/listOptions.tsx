
import { formatNumber, noExponents, setSign } from "src/scripts/util/numbers";

// Styles
import classNames from "classnames";
import { concatString, shortenHashString } from "src/scripts/util/strings";
import { timeAgo } from "src/scripts/util/timeConvert";
import { getTransactionType } from "src/scripts/util/transactions";
import { getTransactionAmount, getTransactionCounterparty, getTransactionFunction } from "src/scripts/util/transaction";
import styles from "../BlockTransactionsList.module.scss";

// Convert
const columnNames = [
    {
        "key": "version",
        "value": "Version",
        "headHideMobile": true,
        "defaultSort": true,
    },
    {
        "key": "type",
        "value": "Type",
        "formatterComponent": (v) => {
            const type = getTransactionType(v);
            return (
                <span className={classNames([
                    styles["block-transactions-list__type"],
                    styles[type.color]
                ])}>{type.name}</span>
            );
        }
    },
    {
        "key": "sender",
        "value": "Sender address",
        "formatter": (v, row) => {
            const transactionSender = (row?.sender || row?.proposer) || "-";
            return shortenHashString(transactionSender);
        }
    },
    {
        "key": "sender",
        "value": "Sent to",
        "formatter": (v, row) => {
            const counterparty = getTransactionCounterparty(row);
            const { address } = counterparty || {};
            return  shortenHashString(address);
        }
    },
    {
        "key": "sender",
        "value": "Function",
        "formatter": (v, row) => {
            let func = getTransactionFunction(row) || "-";
            if(func.length > 21) func = `${func.slice(0, 21)}...`;
            return func;
        }
    },
    {
        "key": "sender",
        "value": "Amount",
        "formatter": (v, row) => {
            const amount = getTransactionAmount(row) || "-";
            return concatString(formatNumber(amount), "", " APT");
        }
    },
];

// Columns
const columns = ["12.5%", "12.5%", "20%", "20%", "20%", "15%"];

export { columnNames, columns };