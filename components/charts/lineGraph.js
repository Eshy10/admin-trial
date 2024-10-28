import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Filler,
    ChartOptions,
  } from "chart.js";
  import { Line } from "react-chartjs-2";
  import { ChatWrapper } from "./lineGraph.styles";
  
  ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Filler);
  const options = {
    hover: {
      mode: "nearest",
      intersect: true,
    },
    responsive: true,
    maintainAspectRatio: false,
    line: {
      datasets: {
        tension: 1,
      },
    },
    scales: {
      y: {
        ticks: {
          // Include a dollar sign in the ticks
          callback: function (value, index, ticks) {
            return "$" + value + "K";
          },
        },
        grid: {
          display: false,
        },
        beginAtZero: true,
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
        labels: {
          font: {
            family: "Poppins",
          },
        },
      },
      tooltip: {
        mode: "index",
        intersect: false,
        backgroundColor: "#1774FF",
        position: "average",
        displayColors: false,
        callbacks: {
          label: function (context) {
            var label = context.dataset.label || "";
            if (label) {
              label += ": ";
            }
            if (context.parsed.y !== null) {
              label += new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(context.parsed.y * 1000);
            }
            return label;
          },
          title: function () {
            return "";
          },
        },
      },
    },
  };
  
  const DailyChart = ({ dailyChartData }) => {
    const labels = ["12 AM", "3 AM", "6 AM", "9 AM", "12 PM", "3 PM", "6 PM", "9PM"];
    const data = {
      labels,
      datasets: [
        {
          data: dailyChartData,
          tension: 0.5,
        },
      ],
    };
    const chartData = {
      ...data,
      datasets: data.datasets.map((dataset) => ({
        ...dataset,
        borderColor: "#1774ffae",
        backgroundColor: "#F3F7FF",
        fill: true,
        pointBorderColor: "rgba(0, 0, 0, 0)",
        pointBackgroundColor: "rgba(0, 0, 0, 0)",
        pointHoverBackgroundColor: "#1774FF",
        pointHoverBorderColor: "#ffffff",
        pointHoverRadius: 9,
        pointHoverBorderWidth: 8,
      })),
    };
    return (
      <ChatWrapper>
        <Line data={chartData} options={options} />
      </ChatWrapper>
    );
  };
  export default DailyChart;
  