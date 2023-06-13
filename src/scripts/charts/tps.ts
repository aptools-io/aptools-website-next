import { graphic } from "echarts";

const tpsOptions = (data: IPoint[]) => {
    const xAxisArray = data.map(item => item.x);
    const yAxisArray = data.map(item => item.y) as number[];
    
    const labels = {
        textStyle: {
            fontSize: 10,
            fontWeight: 400,
            color: "#8b9dc3"
        }
    };
    
    return {
        grid: { top: 20, left: 20, right: 20, bottom: 20 },
        xAxis: {
            type: "category",
            boundaryGap: false,
            data: xAxisArray,
            axisLabel: labels
        },
        yAxis: {
            type: "value",
            min: Math.round(Math.min(...yAxisArray)) - 1,
            interval: 2,
            max: Math.round(Math.max(...yAxisArray)) + 1,
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
                        color: "rgba(59, 89, 152, 1)"
                      },
                      {
                        offset: 1,
                        color: "rgba(59, 89, 152, 0)"
                      }
                    ])
                },
            },
        ],
        tooltip: {
            trigger: "axis",
        },
    };
};

export { tpsOptions };