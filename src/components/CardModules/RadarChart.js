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
  Legend
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
        min: 0,
        max: 100,
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

  return (
      <div>
        {/* <Image src={logoUrl}/> */}
        <Radar style={style} data={data} options={options}/>
      </div>
  );
};

export default RadarChart;