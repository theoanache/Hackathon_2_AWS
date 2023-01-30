import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import { authContext } from "./AuthContext";

function ProtectedRoute({ children }) {
  const { auth } = useContext(authContext);

  if (!auth) {
    return <Navigate to="/" />;
  }
  return children;
}

export default ProtectedRoute;

ProtectedRoute.propTypes = {
  children: PropTypes.string.isRequired,
};
