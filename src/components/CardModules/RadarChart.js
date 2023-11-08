import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
);

const RadarChart = ({ score, att, attScore }) => {
  const attributes = Object.keys(score).filter((key) => key !== '이름' && key !== "WHIP" && key !== "V.C");  
  const dataArrays = attributes.map((attribute) => 
    score[attribute]
  )
  attributes.push(att);
  dataArrays.push(attScore);

  const style = {
    display: 'flex',
    justifyContent: 'center',
    // background: 'url(/image/logo.png) no-repeat center', // 원형 이미지 경로
    backgroundSize: '230%',
  }

  const data = {
    labels: attributes,
    datasets: [
      {
        label: 'Data',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
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
          display: false
        },
        grid: {
          color: 'gray',
          circular: true,
          lineWidth: 0.4,
        },
        pointLabels: {
          color: 'white',
          font: {
            size: (context) => {
              const value = context.label
              if (typeof value === "string" && value.length >= 5) {
                return 10;
              }
              return 13;
            }
          },
        },
        angleLines: {
          color: 'white',
          lineWidth: 0.5,
        }
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };  

  const tooltipPosition = [
    {'x': 0, 'y': -5}, 
    {'x': 8, 'y': -2},
    {'x': 12, 'y': 5},
    {'x': 4, 'y': 14},
    {'x': -4, 'y': 14},
    {'x': -12, 'y': 5},
    {'x': -8, 'y': -2}
  ];

  const alwaysShowTooltip = {
    id: 'alwaysShowTooltip',
    afterDraw(chart, args, options) {
      const { ctx } = chart;
      ctx.save();
      
      chart.data.datasets.forEach((dataset, i) => {
        chart.getDatasetMeta(i).data.forEach((datapoint, index) => {
          const {x, y} = datapoint.tooltipPosition();
          const text = chart.data.datasets[i].data[index];
          const textWidth = ctx.measureText(text).width;
          
          ctx.font = '12px Kanit';
          ctx.fillStyle = 'white';
          ctx.fillText(text, 
            x - (textWidth/2) + tooltipPosition[index]['x'], 
            y + tooltipPosition[index]['y']
          )
          ctx.restore();
        })
      })

    }
  }

  return (
      <div>
        {/* <Image src={logoUrl}/> */}
        <Radar style={style} data={data} options={options} plugins={[alwaysShowTooltip]}/>
      </div>
  );
};

export default RadarChart;