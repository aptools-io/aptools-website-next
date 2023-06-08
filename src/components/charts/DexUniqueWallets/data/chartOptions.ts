import { dexOptions } from "src/scripts/charts/dex";

const chartOptions = (data: IApiDex[]) => {
    return dexOptions(data);
};

export default chartOptions;