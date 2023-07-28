import { performanceOptions } from "src/scripts/charts/performance";
import { concatString } from "src/scripts/util/strings";

const chartOptions = (data: IBar[]) => {
    const titles = data.map(item => item.title).reverse();
    const values = data.map(item => item.value.toFixed(2)).reverse();
    const colors = data.map(item => item.color).reverse();
    return {
        polar: {
            radius: [40, "100%"]
        },
        angleAxis: {
            max: 100,
            startAngle: 90,
            boundaryGap: ["0%", "70%"],
            show: false, 
        },
        radiusAxis: {
            type: "category",
            data: titles,
            show: false, 
            interval: 20,
            z: 1
        },
        tooltip: {},
        series: [{
            tooltip: {
                show: true,
                valueFormatter: (value) => concatString(value, "", "%") 
            },
            type: "bar",
            data: values.map((item, index) => {
                return {
                    value: item,
                    itemStyle: {
                        color: colors[index]
                    }
                };
            }),
            coordinateSystem: "polar",
            barWidth: 5,
            stack: "a",
            label: {
                show: false,
                position: "middle",
                formatter: "{b}: {c}"
            }
        }, {
            type: "bar",
            data: values.map(item => 100 - Number(item)),
            coordinateSystem: "polar",
            stack: "a",
            color: "#F7F7F7",
            barWidth: 5,
            tooltip: {
                show: false,
            },
            label: {
                show: false,
                position: "middle",
                formatter: "{b}: {c}"
            }
        }]
    };
};

export default chartOptions;