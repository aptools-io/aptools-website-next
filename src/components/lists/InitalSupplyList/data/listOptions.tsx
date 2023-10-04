import { formatNumber } from "src/scripts/util/numbers";
import styles from "../InitalSupplyList.module.scss";

// Convert
const columnNames = [
    {
        key: "category",
        value: "Category",
        mainMobile: true,
        formatterComponent: (v, row) => (
            <div>
                <i className={styles["initial-supply-list__color"]} style={{ backgroundColor: row.color }}></i>
                {v}
            </div>
        )
    },
    {
        key: "percent",
        value: "% of Initial Token Distribution",
        right: true,
        formatter: (v) => `${formatNumber(v)}%`
    },
    {
        key: "inital",
        value: "Initial Tokens",
        right: true,
        formatter: (v) => `${formatNumber(v)}`,
        defaultSort: true
    }
];

// Columns
const columns = ["35%", "30%", "35%"];

export { columnNames, columns };
