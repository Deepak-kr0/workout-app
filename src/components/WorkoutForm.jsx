
import React, { useState } from "react";

const WorkoutForm = ({ addWorkout }) => {
  const [exercise, setExercise] = useState("");
  const [sets, setSets] = useState("");
  const [reps, setReps] = useState("");
  const [duration, setDuration] = useState("");
  const [date, setDate] = useState("");

 
  const calculateCalories = (exercise, sets, reps, duration) => {
    const calorieRates = {  //calories per rep
      "push ups": 0.5, 
      "pull ups": 1, 
      "bench press": 1.2, 
      "squats": 0.8,
      "running": 10, 
    };

    const baseCalories = (sets * reps * (calorieRates[exercise.toLowerCase()] || 0.5));
    const durationBonus = (duration / 10) * 5;   //bonus calory
    return Math.round(baseCalories + durationBonus);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!exercise || !sets || !reps || !duration || !date) return;

    const caloriesBurned = calculateCalories(exercise, sets, reps, duration);

    const newWorkout = {
      id: Date.now(),
      exercise,
      sets,
      reps,
      duration,
      date,
      caloriesBurned, // Store calculated calories
    };

    addWorkout(newWorkout);

    setExercise("");
    setSets("");
    setReps("");
    setDuration("");
    setDate("");
  };

  return (
    <div>
      <h2 className="lg-wrkout" style={{ color: "rgb(58 72 185)" }}>Log Workout</h2>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Exercise"
        value={exercise}
        onChange={(e) => setExercise(e.target.value)}
      />
      <input
        type="number"
        placeholder="Sets"
        value={sets}
        onChange={(e) => setSets(e.target.value)}
      />
      <input
        type="number"
        placeholder="Reps"
        value={reps}
        onChange={(e) => setReps(e.target.value)}
      />
      <input
        type="number"
        placeholder="Duration (minutes)"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button type="submit">Add Workout</button>
    </form>

    </div>
  );
};

export default WorkoutForm;
