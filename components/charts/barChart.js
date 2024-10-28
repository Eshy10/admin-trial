import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart = ({ chartData }) => {
  return <Bar  data={chartData}
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
  }} />;
};

export default BarChart;