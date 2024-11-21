import {
  Chart as ChartJS,
  Filler,
  Legend,
  LineElement,
  PointElement,
  RadialLinearScale,
  Tooltip,
} from "chart.js";

import { Radar } from "react-chartjs-2";
import React from "react";
import { margin } from "@mui/system";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const RadarChart = ({ score }) => {
  const attributes = Object.keys(score).filter(
    (key) => key !== "이름" && key !== "WHIP" && key !== "V.C"
  );
  const dataArrays = attributes.map((attribute) => score[attribute]);

  // 점수 평균 계산
  const averageScore =
    dataArrays.reduce((sum, value) => sum + value, 0) / dataArrays.length;

  // 점수가 높을수록 더 어두운 색을 생성하는 함수
  const calculateColor = (avgScore) => {
    // #141e30 색상 기준 RGB 값
    const baseColor = { r: 20, g: 30, b: 48 };

    // 점수를 기준으로 색상을 조정 (점수가 높을수록 밝아짐)
    const factor = 1 - Math.min(1, avgScore / 100); // 점수가 100에 가까울수록 색상이 밝아짐
    const r = Math.floor(baseColor.r + (255 - baseColor.r) * factor);
    const g = Math.floor(baseColor.g + (255 - baseColor.g) * factor);
    const b = Math.floor(baseColor.b + (255 - baseColor.b) * factor);

    return `rgba(${r}, ${g}, ${b}, 0.2)`;
  };

  const style = {
    height: "940px",
    display: "flex",
    justifyContent: "center",
    backgroundSize: "230%",
  };

  const data = {
    labels: attributes,
    datasets: [
      {
        label: "Data",
        backgroundColor: calculateColor(averageScore),
        borderColor: "rgba(75, 192, 192, 1)",
        pointRadius: 0,
        data: dataArrays,
      },
    ],
  };

  const options = {
    scales: {
      r: {
        min: -5,
        max: 110,
        ticks: {
          display: false,
        },
        grid: {
          color: "gray",
          circular: true,
          lineWidth: 0.4,
        },
        pointLabels: {
          color: "white",
          font: {
            size: (context) => {
              const value = context.label;
              if (typeof value === "string" && value.length >= 6) {
                return 24;
              } else if (typeof value === "string" && value.length >= 5) {
                return 30;
              }
              return 40;
            },
          },
        },
        angleLines: {
          color: "white",
          lineWidth: 0.5,
        },
      },
    },
    layout: {
      padding: {
        top: 50,
        right: 50,
        bottom: 50,
        left: 50,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const tooltipPosition = [
    { x: 0, y: -15 },
    { x: 25, y: 0 },
    { x: 15, y: 25 },
    { x: -15, y: 25 },
    { x: -25, y: 0 },
  ];

  const alwaysShowTooltip = {
    id: "alwaysShowTooltip",
    afterDraw(chart, args, options) {
      const { ctx } = chart;
      ctx.save();

      chart.data.datasets.forEach((dataset, i) => {
        chart.getDatasetMeta(i).data.forEach((datapoint, index) => {
          const { x, y } = datapoint.tooltipPosition();
          const text = chart.data.datasets[i].data[index];
          const textWidth = ctx.measureText(text).width;

          ctx.font = "36px Kanit";
          ctx.fillStyle = "white";
          ctx.fillText(
            text,
            x - textWidth / 2 + tooltipPosition[index]["x"],
            y + tooltipPosition[index]["y"]
          );
          ctx.restore();
        });
      });
    },
  };

  return (
    <div>
      <Radar
        style={style}
        data={data}
        options={options}
        plugins={[alwaysShowTooltip]}
      />
    </div>
  );
};

export default RadarChart;
