import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import LogWorkout from "./pages/Workout";
import Progress from "./pages/Progress";
import Diet from "./pages/Diet";
import { WorkoutProvider } from "./context/WorkoutContext";
//import "./App.css";

function App() {
  return (
    <WorkoutProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/log-workout" element={<LogWorkout />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/diet" element={<Diet/>}/>
          
        </Routes>
      </Router>
    </WorkoutProvider>
  );
}

export default App;
