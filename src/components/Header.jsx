import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

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

        {user ? (
          <>
            <span>{user.email}</span>
            <button onClick={handleLogout} className="btn btn-xs">
              Sign out
            </button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </div>
  );
};

export default Header;
