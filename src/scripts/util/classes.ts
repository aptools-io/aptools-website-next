import classNames from "classnames";

const percentClass = (number: string) => {
    const negative = Number(number) < 0 || Number.isNaN(number);
    return classNames([
        "additive-percent",
        ...negative ? ["negative"] : []
    ]);
};

export { percentClass };