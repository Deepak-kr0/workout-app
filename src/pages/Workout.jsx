import React, { useContext, useEffect } from "react";
import WorkoutForm from "../components/WorkoutForm";
import WorkoutList from "../components/WorkoutList";
import { WorkoutContext } from "../context/WorkoutContext";
import Footer from "../components/Footer";

import "./LogWorkout.css";

const homeWorkouts = [
  {
    id: 1,
    name: "Push-ups",
    image: "https://cdn.mos.cms.futurecdn.net/oYDbf5hQAePHEBNZTQMXRA-1200-80.jpg",
    benefits: "Strengthens chest, shoulders, and triceps.",
    targetMuscles: "Chest, Triceps, Shoulders, Core",
    howToDo:
      "Keep hands shoulder-width apart, lower yourself until elbows are at 90 degrees, then push up.",
  },
  {
    id: 2,
    name: "Squats",
    image:
      "https://www.verywellhealth.com/thmb/Zksro0SXTh5-rnZqIMaCKXLaLNU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-713857713-b057bc895fc44b8ea1f6bdf4dd2f0ed2.jpg",
    benefits: "Improves lower body strength and endurance.",
    targetMuscles: "Quadriceps, Hamstrings, Glutes",
    howToDo:
      "Stand with feet shoulder-width apart, lower your hips until thighs are parallel to the ground, then stand up.",
  },
  {
    id: 3,
    name: "Plank",
    image: "https://media.gq.com/photos/57055d0d244f7cb971462730/16:9/pass/details-plank.jpg",
    benefits: "Enhances core stability and endurance.",
    targetMuscles: "Core, Shoulders, Glutes",
    howToDo:
      "Keep your body straight, rest on forearms and toes, and hold the position.",
  },
];

const LogWorkout = () => {
  const { workouts, setWorkouts } = useContext(WorkoutContext);

  useEffect(() => {
    const savedWorkouts = JSON.parse(localStorage.getItem("workouts"));
    if (savedWorkouts) {
      setWorkouts(savedWorkouts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("workouts", JSON.stringify(workouts));
  }, [workouts]);

  const addWorkout = (workout) => {
    setWorkouts([...workouts, workout]);
  };

  const removeWorkout = (id) => {
    setWorkouts(workouts.filter((workout) => workout.id !== id));
  };

  const getWorkoutCountThisWeek = () => {
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
    return workouts.filter((workout) => new Date(workout.date) >= oneWeekAgo).length;
  };

  return (
    <>
    <div className="logworkout-container">
      <h1 className="heading-text">🏋️ Log Your Workout</h1>
      <p className="workout-count">
        You’ve logged <strong>{getWorkoutCountThisWeek()}</strong> workouts this week! 💪🔥
      </p>

      <div className="form-and-list-container">
        <WorkoutForm addWorkout={addWorkout} />
        <WorkoutList workouts={workouts} removeWorkout={removeWorkout} />
      </div>

      <div className="home-workout-section">
        <h2 className="section-title">🏠 Recommended Home Workouts</h2>
        <div className="home-workout-grid">
          {homeWorkouts.map((workout) => (
            <div key={workout.id} className="workout-card">
              <img src={workout.image} alt={workout.name} className="workout-image" />
              <h3>{workout.name}</h3>
              <p>
                <strong>Benefits:</strong> {workout.benefits}
              </p>
              <p>
                <strong>Target Muscles:</strong> {workout.targetMuscles}
              </p>
              <p>
                <strong>How to do:</strong> {workout.howToDo}
              </p>
            </div>
          ))}
        </div>
      </div>
      
    </div>
   <Footer/>
    </>

  );
};

export default LogWorkout;
