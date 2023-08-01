import { chartNumbers } from "../util/numbers";
import { chartDate } from "../util/timeConvert";

const walletsBarOptions = (data: IApiWallets) => {
    const labels = {
        textStyle: {
            fontSize: 10,
            fontWeight: 400,
            color: "#9B9B9B"
        }
    };
    return {
        grid: { top: 30, left: 35, right: 10, bottom: 20 },
        xAxis: {
            type: "category",
            data: data.chart.map(x => x.x),
            axisLabel: {
                formatter: chartDate,
            },
            ...labels
        },
        yAxis: {
            type: "value",
            axisLabel: {
                formatter: chartNumbers,
            },
            splitLine: {
                lineStyle: {
                    color: "#F5F5F5"
                }
            },
            ...labels
        },
        series: [
            {
                data: data.chart.map(x => x.y),
                type: "bar",
                itemStyle: {
                    color: "#60C6A8"
                }
            }
        ],
        tooltip: {
            trigger: "axis",
            order: "valueDesc"
        },
    };
};

export { walletsBarOptions };