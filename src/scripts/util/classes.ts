import classNames from "classnames";

const percentClass = (number: string) => {
    const negative = (Number(number) < 0 || Number.isNaN(number)) && Number(number) !== 0;
    const positive = (Number(number) > 0 || Number.isNaN(number)) && Number(number) !== 0;

    return classNames([
        "additive-percent",
        ...positive ? ["positive"] : [],
        ...negative ? ["negative"] : [],
    ]);
};

export { percentClass };