import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
);

function TotalProductsSoldChart() {
  // Data for the chart
  const data = {
    labels: ["Jan", "Feb", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Total Products Sold",
        data: [1150, 1700, 3300, 3900, 4700, 5100], 
        borderColor: "#98c3ec", 
        backgroundColor: "rgba(212, 233, 255, 1)", // Blue fill below the line
        fill: true,
        tension: 0.4, // Smoother curve
        pointBorderColor: "#032833",
        pointBackgroundColor: "#ffffff",
        pointBorderWidth: 3,
        pointRadius: 1,
        pointHoverRadius: 2,
      },
    ],
  };

  // Options for the chart
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    scales: {
      x: {
        title: {
          display: false,
          text: "Months",
          color: "#333333",
          font: {
            size: 14,
            weight: "bold",
          },
        },
        ticks: {
          color: "#032833",
        },
        grid: {
          display: false,
        },
      },
      y: {
        title: {
          display: true,
          text: "Products Sold",
          color: "#333333",
          font: {
            size: 14,
            weight: "bold",
          },
        },
        ticks: {
          color: "#032833",
        },
        grid: {
          borderDash: [5, 5],
          color: "rgba(0, 0, 0, 0.1)",
        },
      },
    },
    layout: {
      padding: {
        top: 2,
        bottom: 2,
        left: 2,
        right: 2,
      },
    },
    elements: {
      line: {
        borderWidth: 2,
        borderColor: "#98c3ec",
        borderCapStyle: "round",
        borderJoinStyle: "round",
      },
    },
  };

  return (
    <div className="max-w-[280px] h-[150px]">
      <Line data={data} options={options} height={400} />
    </div>
  );
}

export default TotalProductsSoldChart;
