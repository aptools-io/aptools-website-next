import { dexOptions } from "src/scripts/charts/dex";

const chartOptions = (data: IApiDex[], volume: boolean = false) => {
    const options = dexOptions(data);
    const series = {
        type: "line",
        stack: "Total",
        smooth: true,
        lineStyle: {
            width: 0
        },
        showSymbol: false,
        areaStyle: {
            opacity: 1,
        },
        emphasis: {
            focus: "series"
        },
    };
    return {
        ...options,
        ...(volume ? { series: options.series.map(x => { return { ...x, ...series };}) } : {})
    };
};

export default chartOptions;