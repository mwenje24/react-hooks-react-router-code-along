import React from "react";
import { Link } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

function NavBar() {
  return (
    <div>
      <Link
        to="/"
        style={linkStyles}
      >
        Home
      </Link>
      <Link
        to="/about"
        style={linkStyles}
      >
        About
      </Link>
      <Link
        to="/login"
        style={linkStyles}
      >
        Login
      </Link>
    </div>
  );
}

export default NavBar;