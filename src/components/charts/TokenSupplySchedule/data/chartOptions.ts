import { tokenScheludeOptions } from "src/scripts/charts/tokenSchelude";

const chartOptions = (data: IApiTokenSchelude[], volume: boolean = true) => {
    const options = tokenScheludeOptions(data);
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