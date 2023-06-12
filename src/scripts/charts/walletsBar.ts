const walletsBarOptions = (data: IApiWallets) => {
    const labels = {
        textStyle: {
            fontSize: 8,
            fontWeight: 400,
            color: "#9B9B9B"
        }
    };
    return {
        grid: { top: 30, left: 40, right: 40, bottom: 20 },
        xAxis: {
            type: 'category',
            data: data.chart.map(x => x.x),
            axisLabel: {
                formatter: (v) => {
                    const formatter = new Intl.DateTimeFormat('en', { month: 'short' });
                    return `${formatter.format(new Date(v))}'${new Date(v).getFullYear() % 100}`;
                },
            },
            ...labels
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
                type: 'bar',
                itemStyle: {
                    color: '#60C6A8'
                }
            }
        ],
        tooltip: {
            trigger: "axis",
        },
    }
}

export { walletsBarOptions };