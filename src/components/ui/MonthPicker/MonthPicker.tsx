// React
import React, {
    Children,
    useRef,
    useState,
    cloneElement,
    useEffect
} from "react";

// Styles
import classNames from "classnames";
import { ArrowLeft } from "src/components/svg";
import moment from "moment";
import styles from "./MonthPicker.module.scss";

// Util

const MonthPicker: React.FC<IMonthPickerProps> = ({
    onChange,
    value = null,
    setShow
}) => {
    const [lastDate, setLastDate] = useState(false);
    const [hoveredMonth, setHoveredMonth] = useState({
        month: null,
        year: null
    });

    const classes = classNames([
        styles["month-picker"],
        { [styles["active"]]: lastDate }
    ]);

    const handleChangeYear = (number: number) => {
        onChange({
            ...value,
            selectedYear: value.selectedYear + number
        });
    };

    const handleChangeMonth = (month) => {
        const setted = {
            ...value,
            month: {
                ...value.month,
                [!lastDate ? "from" : "to"]: {
                    year: value.selectedYear,
                    month
                }
            },
            selecting: !lastDate
        };

        if (
            lastDate &&
            (setted.month.to.year < setted.month.from.year ||
                (setted.month.to.year === setted.month.from.year &&
                    setted.month.to.month < setted.month.from.month))
        ) {
            const tempSetted = structuredClone(setted);
            setted.month.from = tempSetted.month.to;
            setted.month.to = tempSetted.month.from;
        }

        if (onChange) onChange(setted);
        setLastDate(!lastDate);
    };

    const handleMouseEnter = (month) => {
        setHoveredMonth({ month, year: value.selectedYear });
    };

    const renderMonths = (item, index) => {
        const classes = classNames([
            {
                [styles["active"]]:
                    (value.month.from.month === index &&
                        value.month.from.year === value.selectedYear) ||
                    (value.month.to.month === index &&
                        value.month.to.year === value.selectedYear &&
                        !lastDate)
            },
            {
                [styles["selected"]]:
                    hoveredMonth.month === index &&
                    hoveredMonth.year === value.selectedYear
            },
            {
                [styles["ranged"]]:
                    (lastDate &&
                        ((hoveredMonth.month < index &&
                            index < value.month.from.month &&
                            value.month.from.year === value.selectedYear) ||
                            (hoveredMonth.month < index &&
                                value.month.from.year > value.selectedYear) || // back
                            (hoveredMonth.month > index &&
                                index > value.month.from.month &&
                                value.month.from.year === value.selectedYear) ||
                            (hoveredMonth.month > index &&
                                value.month.from.year < value.selectedYear))) || // front
                    (!lastDate &&
                        ((value.selectedYear === value.month.from.year &&
                            value.selectedYear !== value.month.to.year &&
                            value.month.from.month < index) ||
                            (value.selectedYear === value.month.to.year &&
                                value.selectedYear !== value.month.from.year &&
                                value.month.to.month > index) ||
                            (value.selectedYear > value.month.from.year &&
                                value.selectedYear < value.month.to.year) ||
                            (value.selectedYear === value.month.from.year &&
                                value.selectedYear === value.month.to.year &&
                                index > value.month.from.month &&
                                index < value.month.to.month)))
            }
        ]);
        return (
            <li key={index}>
                <button
                    className={classes}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onClick={() => handleChangeMonth(index)}>
                    {moment.monthsShort(index)}
                </button>
            </li>
        );
    };

    return (
        <div className={classes}>
            <div className={styles["month-picker__years"]}>
                <button onClick={() => handleChangeYear(-1)}>
                    <ArrowLeft />
                </button>
                <div className={styles["year"]}>{value?.selectedYear}</div>
                <button onClick={() => handleChangeYear(1)}>
                    <ArrowLeft />
                </button>
            </div>

            <ul className={styles["month-picker__months"]}>
                {new Array(12).fill(null).map(renderMonths)}
            </ul>
        </div>
    );
};

export default MonthPicker;
