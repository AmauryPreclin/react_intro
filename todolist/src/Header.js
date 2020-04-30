import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav>
      <ul className="ul">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/monday">Monday</Link>
        </li>
        <li>
          <Link to="/tuesday">Tuesday</Link>
        </li>
        <li>
          <Link to="/wednesday">Wednesday</Link>
        </li>
        <li>
          <Link to="/thursday">Thursday</Link>
        </li>
        <li>
          <Link to="/friday">Friday</Link>
        </li>
      </ul>
    </nav>
  );
}

export { Header };
