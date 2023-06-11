import { priceOptions } from "src/scripts/charts/price";
import { tpsOptions } from "src/scripts/charts/tps";

const chartOptions = (data: IPoint[]) => {
    return priceOptions(data)
};

export default chartOptions;