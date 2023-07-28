import { graphic } from "echarts";

const performanceOptions = (data: { name?: string, chart?: IPoint[] }[]) => {
    
    const xAxisArray = data[0].chart?.map(item => item.x);
    const yAxisArray = data[0].chart?.map(item => item.y) as number[];
    
    const labels = {
        textStyle: {
            fontSize: 10,
            fontWeight: 400,
            color: "#8b9dc3"
        }
    };
    
    return {
        grid: { top: 20, left: 40, right: 20, bottom: 20 },
        xAxis: {
            type: "category",
            boundaryGap: false,
            data: xAxisArray,
            axisLabel: {
                formatter: (v) => {
                    const formatter = new Intl.DateTimeFormat("en", { month: "short" });
                    return `${formatter.format(new Date(v))}'${new Date(v).getFullYear() % 100}`;
                },
                ...labels
            },
        },
        yAxis: {
            type: "value",
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

export { performanceOptions };