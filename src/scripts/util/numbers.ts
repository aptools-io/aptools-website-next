const numberShorter = (
    value, 
    fixed, 
    symbols = ["", " thousands", " millions", " billions", " trillions", " quadrillions", " quintillions"]
) => {
    if(value === 0) return value;
    if(value <= 999 && value.toFixed) return value.toFixed(fixed || 2);
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

const checkMinimum = (floating: string, expo: boolean) => {
    const getZeroInteger = floating.indexOf("0.");
    if(expo) return `< 0.0001`;
    if(getZeroInteger > -1 && floating.slice(-1) === "0") return `< ${floating.slice(0, -1)}1`;
    return floating;
};

const formatNumber = (number: string | number, toFixed = 2, checkMin = true) => {
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
    const expo = number.toString()?.indexOf("e") > -1;
    if((pointIndex !== -1 || expo) && checkMin ) return checkMinimum(floating, expo);
    return `${formattedInteger}`;
    
   
    /* return formattedInteger; */
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

const chartNumbers = (v: number) => {
    if(v >= 1000000)
        return `${v/1000000}M`;
    if(v >= 1000)
        return `${v/1000}k`; 
};


const noExponents = (number) => {
    const data = String(number).split(/[eE]/);
    if (data.length === 1) return data[0];
  
    let z = "";
    const sign = number < 0 ? "-" : "";
    const str = data[0].replace(".", "");
    let mag = Number(data[1]) + 1;
  
    if (mag < 0) {
        z = `${sign  }0.`;
        while (mag++) z += "0";
        return z + str.replace(/^-/, "");
    }
    mag -= str.length;
    while (mag--) z += "0";
    return str + z;
};

export { formatNumber, formatDecimal, setSign, percentDifference, numberShorter, chartNumbers, noExponents };