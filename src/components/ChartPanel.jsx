import React, { useEffect, useRef } from "react";
import "./ChartPanel.css";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const ChartPanel = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext("2d");
    chartInstance.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["09:00", "10:00", "11:00", "12:00", "13:00"],
        datasets: [
          {
            label: "BTC/USDT",
            data: [69000, 69400, 68800, 70000, 70500],
            borderColor: "#4ade80",
            backgroundColor: "rgba(74, 222, 128, 0.1)",
            tension: 0.3,
            fill: true,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            labels: { color: "#ccc" },
          },
        },
        scales: {
          x: {
            ticks: { color: "#aaa" },
            grid: { color: "rgba(255,255,255,0.05)" },
          },
          y: {
            ticks: { color: "#aaa" },
            grid: { color: "rgba(255,255,255,0.05)" },
          },
        },
      },
    });
  }, []);

  return (
    <div className="chart-container bg-[#0b0f17] border border-gray-800 text-white w-full h-[400px] rounded-2xl shadow-lg p-4">
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default ChartPanel;
