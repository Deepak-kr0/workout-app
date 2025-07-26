import React from "react";
import "../App.css";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="home-container">
      
     
      <div className="background-overlay"></div>
     
      <header className="hero">
        <h1>🏋️ Welcome to <span>GrindFuel</span></h1>
         <h3>WHERE HUSTLE MEETS FUEL </h3>
        {/* <p>Your personal fitness assistant to log workouts and track progress.</p> */}
        <a href="/log-workout" className="cta-button">Start Tracking</a>
      </header>

      <section className="features">
        <div className="feature-box">
          <img src="https://cdn-icons-png.flaticon.com/512/1041/1041830.png" alt="Log Workout" />
          <h2>📅 Log Your Workouts</h2>
          <p>Track your daily exercises, reps, and calories burned.</p>
        </div>
        <div className="feature-box">
          <img src="https://cdn-icons-png.flaticon.com/512/3076/3076827.png" alt="Track Progress" />
          <h2>📊 View Progress</h2>
          <p>Analyze your workout history with easy-to-read charts.</p>
        </div>
        {/* <div className="feature-box">
          <img src="https://cdn-icons-png.flaticon.com/512/1903/1903162.png" alt="Set Goals" />
          <h2>🏆 Achieve Goals</h2>
          <p>Set fitness goals and stay motivated with progress tracking.</p>
        </div> */}

        <div className="feature-box">
         <img src="https://cdn-icons-png.flaticon.com/512/2920/2920327.png" alt="Healthy Diet" />
         <h2>🥗 Diet</h2>
         <p>Maintain a balanced diet to complement your workout and enhance your fitness journey.</p>
        </div>
      </section>

      <section className="about">
        <h2>Why Choose <span>Fitness Tracker?</span></h2>
        <p>Our platform helps you maintain a structured workout routine, track your progress, and achieve your fitness goals efficiently.</p>
      </section>

      <section className="testimonials">
        <h2>💬 What Users Say</h2>
        <div className="testimonial">
          <p>“This fitness tracker has changed the way I work out! The progress tracking is amazing.”</p>
          <h4>- Rahul Mishra</h4>
        </div>
        <div className="testimonial">
          <p>“A great app for tracking workouts. Simple, clean, and efficient.”</p>
          <h4>- Anusrita Sharma</h4>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default Home;

