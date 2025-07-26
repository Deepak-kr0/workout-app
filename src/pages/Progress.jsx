

import React, { useContext } from "react";
import ProgressChart from "../components/ProgressChart";
import { WorkoutContext } from "../context/WorkoutContext";
import Footer from "../components/Footer";
import "./Progress.css";

const Progress = () => {
  const { workouts } = useContext(WorkoutContext);
  const totalWorkouts = workouts.length;

  return (
    <>
    <div className="progress-page">
      <h1 className="heading">🏋️‍♂️ Your Fitness Journey</h1>

      {totalWorkouts > 0 ? (
        <>
          <div className="stats-container">
            <div className="stat-card">
              <h2>{totalWorkouts}</h2>
              <p>Total Workouts</p>
            </div>
            <div className="stat-card">
              <h2>🔥 7 Days</h2>
              <p>Longest Streak</p>
            </div>
          </div>

          <div className="progress-chart-container">
            <ProgressChart workouts={workouts} />
          </div>

          <div className="progress-bar-container">
            <div className="progress-label">Weekly Goal</div>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${Math.min((totalWorkouts / 5) * 100, 100)}%` }}
              ></div>
            </div>
          </div>

          <p className="motivation">Keep pushing! You're doing great! 💪</p>
        </>
      ) : (
        <p className="empty-message">No workout data yet. Let's start today! 🚀</p>
      )}
      
    </div>
    <Footer/>
    </>
  );
};

export default Progress;

