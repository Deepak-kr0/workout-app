
import React from "react";
import "./Footer.css";
import devImg from "../assets/ankit-dev2.jpg"; 

const Footer = () => {
  return (
    <footer className="footer">
      <h2>💪 <span style={{ color: "#2563eb" }}>GrindFuel</span></h2>
      <p>Track your workouts. Monitor your diet. Crush your goals.</p>
      <p className="tagline">
        <em>Made with <span style={{ color: "hotpink" }}>❤️</span> by Ankit</em>
      </p>

      <div className="footer-img">
        <img src={devImg} alt="Ankit" />
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} GrindFuel. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
