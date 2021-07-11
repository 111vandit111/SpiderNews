import React from "react";
import { Link, withRouter } from "react-router-dom";

const Navbar = (props) => {
//   setTimeout(() => {
//     props.history.push("./about");
//   }, 2000);
   return (
    <nav className="nav-wrapper red darken-4">
      <div className="container">
        <Link to="/" className="brand-logo">
          Spider-News
        </Link>
        <ul className="right">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/contacts">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
