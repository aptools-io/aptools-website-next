import { chartNumbers } from "../util/numbers";
import { chartDate } from "../util/timeConvert";

const tokenScheludeOptions = (data: IApiTokenSchelude[]) => {
    const xAxisArray = data[0].chart.map(item => item.x);

    const labels = {
        textStyle: {
            fontSize: 10,
            fontWeight: 400,
            color: "#9B9B9B"
        }
    };

    const legend = {
        data: data.map(item => item.category),
        icon: "circle",
        itemWidth: 6,
        itemHeight: 6,
        itemGap: 6,
        left: 0,
        align: "left",
        itemStyle: {
            color: "white",
            borderWidth: 1,
            borderColor: "auto"
        },
        textStyle: {
            fontSize: 10,
            fontWeight: 400,
            color: "#9B9B9B"
        }
    };

    const series = data.map(dex => {
        const yAxisArray = dex.chart.map(point => point.y) as number[];
        return {
            data: yAxisArray,
            type: "line",
            name: dex.category,
            symbol: "circle",
            symbolSize: 4,
            itemStyle: {
                borderWidth: 0,
            },
            areaStyle: {
                opacity: 0,
            },
        };
    });
    
    return {
        grid: { top: 50, left: 10, right: 10, bottom: 20 },
        
        xAxis: {
            type: "category",
            boundaryGap: false,
            data: xAxisArray,
            axisLabel: {
                formatter: chartDate,
                ...labels
            },
        },
        yAxis: {
            type: "value",
            axisLabel: {
                formatter: chartNumbers,
                ...labels
            },
            splitLine: {
                lineStyle: {
                    color: "#F5F5F5"
                }
            }
        },
        series,
        color: ["#EF8686", "#FDD97D", "#60C6A8", "#9B9B9B", "#1D1F30"],
        legend,
        tooltip: {
            trigger: "axis",
            order: "valueDesc"
        },
    };
};

export { tokenScheludeOptions };