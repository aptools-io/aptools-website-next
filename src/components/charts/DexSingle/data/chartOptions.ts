import { walletsOptions } from "src/scripts/charts/wallets";

const chartOptions = (data: IApiWallets[]) => {
    const options = walletsOptions(data);
    return {
        ...options,
        "legend": { show: false },
        "grid": { ...options.grid, top: 10 },
    };
};

export default chartOptions;