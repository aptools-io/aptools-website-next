
import { formatNumber, setSign } from "src/scripts/util/numbers";

// Styles
import classNames from "classnames";
import styles from "../DexPairsList.module.scss";

// Convert
const columnNames = [
    {
        "key": "pair",
        "value": "Pair",
        "symbol": "pair",
    },
    {
        "key": "type",
        "value": "Type",
        "formatterComponent": (v) => {
            return (
                <span className={classNames([
                    styles["dex-pairs__type"],
                    { [styles["spot"]]: v === "Spot" },
                    { [styles["margin-short"]]: v === "Margin Short" },
                    { [styles["margin-long"]]: v === "Margin Long" }
                ])}>{v}</span>
            );
        }
    },
    {
        "key": "price",
        "value": "Price USD",
        "formatter": (v) => `$${formatNumber(v)}`
    },
    {
        "key": "24h_txns",
        "value": "24h Txns",
        "formatter": (v) => `${formatNumber(v)}`
    },
    {
        "key": "tvl",
        "value": "TVL",
        "right": true,
        "formatter": (v) => `${formatNumber(v)}`
    },
    {
        "key": "tvl_change",
        "value": "%",
        "formatter": (v) => `${setSign(formatNumber(v))}%`,
        "colorize": true
    },
    {
        "key": "volume_24h",
        "value": "24h Volume",
        "right": true,
        "defaultSort": true,
        "formatter": (v) => `${formatNumber(v)}`
    },
    {
        "key": "volume_24h_change",
        "value": "%",
        "formatter": (v) => `${setSign(formatNumber(v))}%`,
        "colorize": true
    },
    {
        "key": "last_trade",
        "value": "Last trade",
        "right": true
    }
];

// Columns
const columns = ["22.5%", "7.5%", "10%", "10%", "12.5%", "7.5%", "12.5%", "7.5%", "10%"];

export { columnNames, columns };