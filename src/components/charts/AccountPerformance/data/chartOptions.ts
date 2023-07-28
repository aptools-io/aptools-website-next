import { performanceOptions } from "src/scripts/charts/performance";

const chartOptions = (data: { name?: string, chart?: IPoint[] }[]) => {
    return performanceOptions(data);
};

export default chartOptions;