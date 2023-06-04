// React
import React from "react";

// ECharts
import ReactECharts from 'echarts-for-react';
import { graphic } from "echarts";

// Styles
import styles from "./StatsTransactions.module.scss";

// Other
import classNames from "classnames";

const tps = [
    {
        "x": "16:00",
        "y": 6.74
    },
    {
        "x": "17:00",
        "y": 6.76
    },
    {
        "x": "18:00",
        "y": 6.74
    },
    {
        "x": "19:00",
        "y": 6.4
    },
    {
        "x": "20:00",
        "y": 6.23
    },
    {
        "x": "21:00",
        "y": 6.1
    },
    {
        "x": "22:00",
        "y": 5.97
    },
    {
        "x": "23:00",
        "y": 5.81
    },
    {
        "x": "00:00",
        "y": 5.61
    },
    {
        "x": "01:00",
        "y": 5.71
    },
    {
        "x": "02:00",
        "y": 5.74
    },
    {
        "x": "03:00",
        "y": 5.9
    },
    {
        "x": "04:00",
        "y": 6.06
    },
    {
        "x": "05:00",
        "y": 6.18
    },
    {
        "x": "06:00",
        "y": 6.37
    },
    {
        "x": "07:00",
        "y": 6.86
    },
    {
        "x": "08:00",
        "y": 6.97
    },
    {
        "x": "09:00",
        "y": 7.17
    },
    {
        "x": "10:00",
        "y": 7.22
    },
    {
        "x": "11:00",
        "y": 7.35
    },
    {
        "x": "12:00",
        "y": 7.38
    },
    {
        "x": "13:00",
        "y": 7.45
    },
    {
        "x": "14:00",
        "y": 7.4
    }
]

const options = {
    grid: { top: 20, left: 20, right: 20, bottom: 20 },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: tps.map(item => item.x),
    },
    yAxis: {
        type: 'value',
        min: Math.round(Math.min(...tps.map(item => item.y))) - 1,
        interval: 1,
        max: Math.round(Math.max(...tps.map(item => item.y))) + 1,
    },
    series: 
    [
        {
            data: tps.map(item => item.y),
            type: 'line',
            symbol: 'circle',
            symbolSize: 4,
            lineStyle: {
                color: "rgb(59, 89, 152)",
            },
            itemStyle: {
                color: "rgb(59, 89, 152)",
                borderWidth: 0,
            },
            areaStyle: {
                opacity: 0.8,
                color: new graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: 'rgba(59, 89, 152, 1)'
                  },
                  {
                    offset: 1,
                    color: 'rgba(59, 89, 152, 0)'
                  }
                ])
            },
        },
    ],
    tooltip: {
        trigger: 'axis',
    },
};


const StatsTransactions: React.FC<IPlateProps> = ({
    className 
}) => {

    const classes = classNames([
        styles["stats-transactions"],
        className
    ]);

    return (
        <div className={classes}>
            <ReactECharts style={{height: '78px', width: '100%'}} theme={""} option={options} />
        </div>
    )
}

export default StatsTransactions;
