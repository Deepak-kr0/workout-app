
// import React from "react";

// const WorkoutList = ({ workouts, removeWorkout }) => {
//   return (
//     <div>
//       <h2>Workout History</h2>
//       {workouts.length === 0 ? (
//         <p>No workouts logged yet.</p>
//       ) : (
//         workouts.map((workout) => (
//           <div key={workout.id}>
//             <p>
//               {workout.exercise} - {workout.sets} sets x {workout.reps} reps
//             </p>
//             <p>Duration: {workout.duration} minutes</p>
//             <p>Date: {workout.date}</p>
//             <p>Calories Burned: {workout.caloriesBurned}</p>
//             <button onClick={() => removeWorkout(workout.id)}>Remove</button>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default WorkoutList;





// import React from "react";
// import "./WorkoutList.css"; // Optional: for custom styles if needed

// const WorkoutList = ({ workouts, removeWorkout }) => {
//   return (
//     <div className="workout-list">
//       <h2 className="section-title">Workout History</h2>

//       {workouts.length === 0 ? (
//         <p style={{ textAlign: "center", color: "#777" }}>No workouts logged yet.</p>
//       ) : (
//         workouts.map((workout) => (
//           <div key={workout.id} className="workout-entry">
//             <p><strong>{workout.exercise}</strong> — {workout.sets} sets × {workout.reps} reps</p>
//             <p>Duration: {workout.duration} minutes</p>
//             <p>Date: {workout.date}</p>
//             <p>Calories Burned: {workout.caloriesBurned}</p>
//             <button onClick={() => removeWorkout(workout.id)}>Remove</button>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default WorkoutList;

import React from "react";
import "./WorkoutList.css";

const WorkoutList = ({ workouts, removeWorkout }) => {
  return (
    <div className="workout-list-section">
      <h2 className="section-title">🏋️‍♀️ Your Workout History</h2>

      {workouts.length === 0 ? (
        <p style={{ textAlign: "center", fontSize: "1.1rem", color: "#444" }}>
          No workouts logged yet. Start exercising today! 💪
        </p>
      ) : (
        <div className="workout-grid">
          {workouts.map((workout) => (
            <div key={workout.id} className="workout-entry">
              <p><strong>{workout.exercise}</strong> — {workout.sets} sets × {workout.reps} reps</p>
              <p>🕒 Duration: {workout.duration} minutes</p>
              <p>📅 Date: {workout.date}</p>
              <p>🔥 Calories Burned: {workout.caloriesBurned}</p>
              <button onClick={() => removeWorkout(workout.id)}>Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WorkoutList;
