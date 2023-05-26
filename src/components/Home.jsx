import React from "react";
import "../styles/Home.css";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="landingPage">
      <div className="welcome-msg">
        <h1>The Bob's Burgers API</h1>
        <NavLink to="/displayPage">
          <button>Get Started</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
