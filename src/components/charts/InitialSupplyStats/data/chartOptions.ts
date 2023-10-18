import { performanceOptions } from "src/scripts/charts/performance";
import { concatString } from "src/scripts/util/strings";

const chartOptions = (data: IBar[]) => {
    const titles = data.map((item) => item.title).reverse();
    const values = data.map((item) => item.value.toFixed(2)).reverse();
    const colors = data.map((item) => item.color).reverse();
    return {
        polar: {
            radius: [40, "100%"]
        },
        angleAxis: {
            max: 100,
            startAngle: 90,
            boundaryGap: ["0%", "70%"],
            show: false
        },
        radiusAxis: {
            type: "category",
            data: titles,
            show: false,
            interval: 20,
            z: 1
        },
        tooltip: {},
        series: [
            {
                type: "pie",
                data: values.map((item, index) => {
                    return {
                        value: item,
                        itemStyle: {
                            color: colors[index]
                        },
                        tooltip: {
                            show: true,
                            valueFormatter: (value) => concatString(value, `${titles[index]} `, "%")
                        }
                    };
                }),
                barWidth: 5,
                radius: "85%",
                stack: "a",
                label: {
                    show: false,
                    position: "middle",
                    formatter: "{b}: {c}"
                },
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: "rgba(0, 0, 0, 0.5)"
                    }
                }
            }
        ]
    };
};

export default chartOptions;
