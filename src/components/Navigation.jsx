import React from "react";
import "../styles/Navigation.css";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="Container">
      <div>
        <p>The-BobBurgers</p>
      </div>
      <div className="Links">
        <ul>
          <li>
            <Link to="/displayPage">All-Characters</Link>
          </li>
          <li>
            <Link to="/Episodes">Episodes</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
