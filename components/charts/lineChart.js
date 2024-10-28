import React from 'react';
import { Line } from 'react-chartjs-2';


const LineChart = ({ chartData }) => {
  return <Line  data={chartData}
  options={{
    plugins: {
      title: {
        display: true,
        text: "Users Gained between 2016-2020"
      },
      legend: {
        display: false,
        labels: {
          font: {
            family: "Poppins",
          },
        },
      }
    },
    scales: {
      x: {
        grid: {
          display: false, // Hide x-axis grid lines
        },
      },
      y: {
        grid: {
          display: false, // Hide y-axis grid lines
        },
      },
    },
  }}  />;
};

export default LineChart;