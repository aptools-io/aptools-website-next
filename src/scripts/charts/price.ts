import { graphic } from "echarts";

const priceOptions = (data: IPoint[]) => {
    const xAxisArray = data?.map(item => item.x) || [];
    const yAxisArray = data?.map(item => item.y) as number[] || [];
    
    const labels = {
        textStyle: {
            fontSize: 10,
            fontWeight: 400,
            color: "#8b9dc3"
        }
    };
    
    return {
        grid: { top: 5, left: 5, right: 5, bottom: 5 },
        xAxis: {
            show: false,
            type: "category",
            boundaryGap: false,
            data: xAxisArray,
            axisLabel: labels
        },
        yAxis: {
            show: false,
            type: "value",
            boundaryGap: false,
            min: Math.round(Math.min(...yAxisArray)) - 3,
            interval: 2,
            max: Math.max(...yAxisArray),
            axisLabel: labels
        },
        series: 
        [
            {
                data: yAxisArray,
                type: "line",
                symbol: "circle",
                symbolSize: 4,
                lineStyle: {
                    color: "rgb(59, 89, 152)",
                },
                itemStyle: {
                    color: "rgb(59, 89, 152)",
                    borderWidth: 0,
                },
                areaStyle: {
                    opacity: 0.8,
                    color: new graphic.LinearGradient(0, 0, 0, 1, [
                      {
                        offset: 0,
                        color: "rgba(67, 57, 242, 0.1)"
                      },
                      {
                        offset: 1,
                        color: "rgba(67, 57, 242, 0)"
                      }
                    ])
                },
            },
        ],
        tooltip: {
            trigger: "axis",
            order: "valueDesc"
        },
    };
};

export { priceOptions };