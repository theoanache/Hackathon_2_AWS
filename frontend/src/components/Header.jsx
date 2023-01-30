import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../context/AuthContext";
import logo from "../assets/logo.png";
import avatarUser from "../assets/avatar_user.png";
import "./Header.css";

function Header() {
  const { auth } = useContext(authContext);

  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      {auth.data ? (
        <div className="user_info">
          <img className="user_photo" src={avatarUser} alt="user_photo" />
          <h1 className="user_name">
            {auth.data.firstname} {auth.data.lastname}
          </h1>
        </div>
      ) : (
        <div className="user_info">
          <Link to="/SignIn">
            <h2 className="user_name">Sign In</h2>
          </Link>
          <Link to="/login">
            <h2 className="user_name">Login</h2>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Header;
