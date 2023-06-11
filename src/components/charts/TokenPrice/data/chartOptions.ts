import { walletsOptions } from "src/scripts/charts/wallets";

const chartOptions = (data: IApiWallets[]) => {
    const options = walletsOptions(data);
    const yAxisArray = data[0].chart.map(item => item.y)  as number[];
    return {
        ...options,
        "legend": { show: false },
        "grid": { ...options.grid, top: 10 },
        "yAxis": {
            ...options.yAxis,
            axisLabel: {
                ...options.yAxis.axisLabel,
                formatter: (v) => v
            },
            min: Math.round(Math.min(...yAxisArray)) - 1,
            interval: 1,
            max: Math.round(Math.max(...yAxisArray)) + 1,
        }
    };
};

export default chartOptions;