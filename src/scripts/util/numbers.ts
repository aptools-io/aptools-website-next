const numberShorter = (
    value, 
    fixed, 
    symbols = ["", " thousands", " millions", " billions", " trillions", " quadrillions", " quintillions"]
) => {
    if(value === 0) return value;
    if(value <= 999) return value.toFixed(fixed || 2);
    const schema = symbols || ["", "k", "M", "B", "T", "Q", "P"];
    const index = Math.floor(Math.log10(value) / 3);
    return (value / 10**(3 * index)).toFixed(fixed || 2) + (schema[index] === undefined ? (`e${  index * 3}`) : schema[index]);
};

const formatDecimal = (decimal: string, toFixed: number = 2) => { 
    if(decimal.length > toFixed) return decimal.slice(0, toFixed);
    if(decimal.length < toFixed) {
        let dec = decimal;
        for(let i = 0; i < toFixed - decimal.length; i ++) {
            dec += "0";
        }
        return dec;
    }
    return decimal;
};

const checkMinimum = (floating: string) => {
    const getZeroInteger = floating.indexOf("0.");
    if(getZeroInteger > -1 && floating.slice(-1) === "0") return `< ${floating.slice(0, -1)}1`;
    return floating;
};

const formatNumber = (number: string | number, toFixed = 2) => {
    if(Number.isNaN(Number(number))) return number;

    let num = number;
    if(typeof num === "string" && !Number.isNaN(Number(num))) num = Number(num);
    else num = Number(num);

    if(num === 0) return `${num}`;

  

    const numberString = num.toString();
    const pointIndex = numberString.indexOf(".");
    const integer = pointIndex === -1 ? numberString : numberString.substring(0, pointIndex);
    const decimal = numberString.substring(pointIndex + 1);

    const formattedInteger = new Intl.NumberFormat("en").format(Number(integer)).replaceAll(",", " ");

    const floating = `${formattedInteger}.${formatDecimal(decimal, toFixed)}`;
    if(pointIndex !== -1) return checkMinimum(floating);
    
   
    return formattedInteger;
};

const setSign = (number: string | number) => {
    const minus = `${number}`.indexOf("-");
    if(minus > -1) return number;
    if(Number(number) !== 0) return `+${number}`;
    return number;
};

const percentDifference = (el1: number, el2: number) => {
    if(el1 === 0) return 100;
    return 100.0 * (el2 - el1) / el1;
};

export { formatNumber, formatDecimal, setSign, percentDifference, numberShorter };