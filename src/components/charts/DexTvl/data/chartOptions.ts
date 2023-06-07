import { graphic } from "echarts";

const chartOptions = (data: IApiDex[]) => {
    const xAxisArray = data[0].chart.map(item => item.x);
    let maxAmount = 0;
    data.forEach(element => {
        element.chart.forEach(item => maxAmount < item.y ? maxAmount = item.y as number : maxAmount)
    });

    const labels = {
        textStyle: {
            fontSize: 8,
            fontWeight: 400,
            color: "#8b9dc3"
        }
    };

    const series = data.map(dex => {
        const yAxisArray = dex.chart.map(point => point.y) as number[];
        return {
            data: yAxisArray,
            type: "line",
            name: dex.dex,
            symbol: "circle",
            symbolSize: 4,
            itemStyle: {
                borderWidth: 0,
            },
            areaStyle: {
                opacity: 0,
            },
        }
    })
    
    const legend = {
        data: data.map(item => item.dex)
    }
    
    return {
        grid: { top: 80, left: 40, right: 40, bottom: 20 },
        xAxis: {
            type: "category",
            boundaryGap: false,
            data: xAxisArray,
            axisLabel: labels
        },
        yAxis: {
            type: "value",
            axisLabel: {
                formatter: (v) => {
                    return v/1000000 + "M";
                }
            }
        },
        series,
        legend,
        tooltip: {
            trigger: "axis",
        },
    };
};

export default chartOptions;