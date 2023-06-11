import { walletsOptions } from "src/scripts/charts/wallets";

const chartOptions = (data: IApiWallets[]) => {
    return walletsOptions(data);
};

export default chartOptions;