import { registerMap } from "echarts";
import world from "./world";

const chartOptions = (locations: IApiValidatorLocation[], zoom = 1.25) => {
    registerMap("world", world as any);

    const countries = [
        ...new Set(locations.map((item) => item?.location_stats.country))
    ];

    const getOccurrences = (array) =>
        array.reduce((acc, curr) => {
            return (acc[curr] = (acc[curr] || 0) + 1), acc; // eslint-disable-line no-return-assign
        }, {});

    const getMax = (array) => {
        let max = 0;
        for (let i = 0; i < array.length; i++) {
            if (array[i] > max) max = array[i];
        }
        return max;
    };

    const getColor = (max, count) => {
        return [59, 89, 152, (count / max).toFixed(2)];
    };

    const countriesOccurrences = Object.entries(
        getOccurrences(locations.map((item) => item?.location_stats.country))
    );

    console.log(
        getOccurrences(locations.map((item) => item?.location_stats.country))
    );

    const max = getMax(countriesOccurrences.map((item) => item[1]));

    const regions = countriesOccurrences.map((item) => {
        const name =
            {
                "United States": "United States of America",
                "Hong Kong": "China",
                Taiwan: "China",
                Singapore: "Malaysia"
            }[item[0]] || item[0];
        return {
            name: name,
            itemStyle: {
                areaColor: `rgba(${getColor(max, item[1]).join(", ")})`
            }
        };
    });

    const data = locations.map((item, index) => {
        return {
            type: "scatter",
            progressive: 1e6,
            coordinateSystem: "geo",
            symbolSize: "10",
            zoomScale: 0.222,
            blendMode: "source-over",
            large: true,
            postEffect: {
                enable: true
            },
            dimensions: ["lng", "lat"],
            data: [
                [item.location_stats.longitude, item.location_stats.latitude]
            ],
            tooltip: {
                trigger: "item",
                show: true,
                formatter: (value) => `
                    Country: <b>${item.location_stats.country}</b><br/>
                    City: <b>${item.location_stats.city}</b><br/>
                    Epoch: <b>${item.last_epoch}</b>`
            },
            itemStyle: {
                normal: {
                    color: "#ef8686",
                    borderColor: "#3b5998"
                }
            }
        };
    });
    return {
        tooltip: {
            show: true
        },
        geo: {
            tooltip: {
                trigger: "item",
                show: true,
                formatter: (v) => {
                    const elements = locations.filter((item) => {
                        return (
                            item.location_stats.country === v.name ||
                            (item.location_stats.country === "United States" &&
                                v.name === "United States of America") ||
                            (item.location_stats.country === "Hong Kong" &&
                                v.name === "China") ||
                            (item.location_stats.country === "Taiwan" &&
                                v.name === "China") ||
                            (item.location_stats.country === "Singapore" &&
                                v.name === "Malaysia")
                        );
                    });
                    const cities = Object.entries(
                        getOccurrences(
                            elements.map((item) => item.location_stats.city)
                        )
                    );
                    const citiesString = cities
                        .map((item) => `${item[0]} - ${item[1]}`)
                        .join("<br/>");
                    return `<strong>${v.name}</strong>${
                        cities?.length ? `<br /><br />${citiesString}` : ""
                    }`;
                }
            },
            map: "world",
            roam: true,
            label: {
                emphasis: {
                    show: false
                }
            },
            zoom,
            scaleLimit: {
                min: 1.15,
                max: 7
            },
            itemStyle: {
                normal: {
                    areaColor: "#F7F7F7",
                    borderColor: "#3B599800"
                },
                emphasis: {
                    areaColor: "#3b5998"
                }
            },
            regions
        }
        /* series: data */
    };
};

export default chartOptions;
