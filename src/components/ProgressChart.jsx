
import React, { useEffect, useRef } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";


ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ProgressChart = ({ workouts }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy(); 
      }
    };
  }, []);

  if (!workouts || workouts.length === 0) {
    return <p>No workouts to display.</p>;
  }

  
  const chartData = {
    labels: workouts.map((w) => `${w.exercise} (${w.date})`), 
    datasets: [
      {
        label: "Calories Burned",
        data: workouts.map((w) => w.caloriesBurned),
        backgroundColor: "rgba(255, 99, 132, 0.6)",
      },
      {
        label: "Workout Duration (minutes)",
        data: workouts.map((w) => w.duration),
        backgroundColor: "rgba(54, 162, 235, 0.6)", 
      },
    ],
  };

  return (
    <div>
      <h2>Workout Progress</h2>
      <Bar ref={chartRef} data={chartData} />
    </div>
  );
};

export default ProgressChart;
