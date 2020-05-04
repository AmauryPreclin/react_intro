import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <nav>
      <div className="header">
        <div className="link">
          <Link to="/">Home</Link>
        </div>
        <div className="link">
          <Link to="/monday">Monday</Link>
        </div>
        <div className="link">
          <Link to="/tuesday">Tuesday</Link>
        </div>
        <div className="link">
          <Link to="/wednesday">Wednesday</Link>
        </div>
        <div className="link">
          <Link to="/thursday">Thursday</Link>
        </div>
        <div className="link">
          <Link to="/friday">Friday</Link>
        </div>
      </div>
    </nav>
  );
}

export { Header };
