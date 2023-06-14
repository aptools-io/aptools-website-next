import { priceOptions } from "src/scripts/charts/price";

const chartOptions = (data: IPoint[]) => {
    return priceOptions(data);
};

export default chartOptions;