import { performanceOptions } from "src/scripts/charts/performance";

const chartOptions = (data: IPoint[]) => {
    return performanceOptions(data);
};

export default chartOptions;