import React from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const ExpensesVsProfitChart = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Expenses",
        data: [12, 15, 7, 21, 15, 15],
        fill: true,
        borderColor: "lightblue",
        backgroundColor: "rgba(173, 216, 230, 0.2)", // Light blue area below the curve
        tension: 0.4, // Smooth curve
      },
      {
        label: "Profit",
        data: [18, 28, 23, 13, 26, 27],
        fill: true,
        borderColor: "blue",
        backgroundColor: "rgba(0, 0, 255, 0.1)", // Dark blue area below the curve
        tension: 0.4, // Smooth curve
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Expenses vs. Profit Over Time",
      },
      legend: {
        display: true,
        position: "top",
      },
    },
    scales: {
      x: {
        display: true,
        title: {
          display: false,
          text: "Month",
        },
        grid: {
          display: false, // Hide horizontal grid lines
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: "Amount (%)",
        },
        grid: {
          display: false, // Hide vertical grid lines
        },
        suggestedMin: 0,
        suggestedMax: 35,
      },
    },
    elements: {
      line: {
        borderWidth: 3, // Border width of the curves
      },
      point: {
        radius: 4, // Size of points on the lines
        backgroundColor: "white", // Color of points
      },
    },
  };

  return (
    <div style={{ width: "540px", margin: "0 auto", padding: "17px" }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default ExpensesVsProfitChart;
