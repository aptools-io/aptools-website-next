const walletsOptions = (data: IApiWallets[]) => {
    const xAxisArray = data[0].chart.map(item => item.x);

    const labels = {
        textStyle: {
            fontSize: 8,
            fontWeight: 400,
            color: "#9B9B9B"
        }
    };

    const legend = {
        data: data.map(item => item.name),
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
            fontSize: 8,
            fontWeight: 400,
            color: "#9B9B9B"
        }
    }

    const series = data.map(wallet => {
        const yAxisArray = wallet.chart.map(point => point.y) as number[];
        return {
            data: yAxisArray,
            type: "line",
            name: wallet.name,
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
    
    return {
        grid: { top: 30, left: 40, right: 40, bottom: 20 },
        xAxis: {
            type: "category",
            boundaryGap: false,
            data: xAxisArray,
            axisLabel: {
                formatter: (v) => {
                    const formatter = new Intl.DateTimeFormat('en', { month: 'short' });
                    return `${formatter.format(new Date(v))}'${new Date(v).getFullYear() % 100}`;
                },
                ...labels
            },
        },
        yAxis: {
            type: "value",
            axisLabel: {
                formatter: (v) => {
                    if(v >= 1000000)
                        return v/1000000 + "M";
                    if(v >= 1000)
                        return v/1000 + "k"; 
                },
                ...labels
            },
            splitLine: {
                lineStyle: {
                    color: "#F5F5F5"
                }
            }
        },
        series,
        legend,
        tooltip: {
            trigger: "axis",
        },
    }
}

export { walletsOptions };