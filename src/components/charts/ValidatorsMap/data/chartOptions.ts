import { registerMap } from "echarts";
import world from "./world";

const chartOptions = (locations: IApiValidatorLocation[]) => {
    registerMap('world', world as any);
    const countries = [...new Set(locations.map(item => item?.country))];
    const data = locations.map((item, index) => {
        return  {
            type: 'scatter',
            progressive: 1e6,
            coordinateSystem: 'geo',
            symbolSize: '10',
            zoomScale: 0.222,
            blendMode: 'source-over',
            large: true,
            postEffect: {
                enable: true
            },
            dimensions: ['lng', 'lat'],
            data: [[item.longitude, item.latitude]],
            tooltip: {
                trigger: 'item',
                show: true,
                formatter: (value) => `
                    Country: <b>${item.country}</b><br/>
                    City: <b>${item.city}</b><br/>
                    Epoch: <b>${item.epoch}</b>`
            },
            itemStyle: {
                normal: {
                    color: '#ef8686',
                    borderColor: "#3b5998"
                },
                
            }
        }
    })
    return {
        tooltip: {
            show: true
        },
        geo: {
            tooltip: {
                trigger: 'item',
                show: true,
                formatter: v => {
                    return `${v.name} - ${locations.filter(country => {
                        return (
                            country.country === v.name || 
                            country.country === "United States" && v.name === "United States of America" ||
                            country.country === "Hong Kong" && v.name === "China")
                    }).length}`;
                }
            },
            map: 'world',
            roam: true,
            label: {
                emphasis: {
                    show: false
                }
            },
            zoom: 1.25,
            itemStyle: {
                normal: {
                    areaColor: '#fff',
                    borderColor: '#3B5998'
                },
                emphasis: {
                    areaColor: '#DFE3EE'
                },
            },
            
        },
        series: data
    }
};

export default chartOptions;