import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-primary text-primary-content">
        <a className="btn btn-ghost normal-case text-xl">Auth Wizard</a>
        <Link className="btn btn-ghost normal-case" to="/">
          Home
        </Link>
        <Link className="btn btn-ghost normal-case" to="/login">
          Login
        </Link>
        <Link className="btn btn-ghost normal-case" to="/register">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Header;
