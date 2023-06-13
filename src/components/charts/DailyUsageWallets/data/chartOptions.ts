import { walletsBarOptions } from "src/scripts/charts/walletsBar";

const chartOptions = (data: IApiWallets) => {
    return walletsBarOptions(data);
};

export default chartOptions;