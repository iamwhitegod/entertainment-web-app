import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useUser } from "../contexts/auth";

const ProtectedRoute = ({ children }) => {
  const { user } = useUser();
  const { pathname } = useLocation();

  console.log(pathname, user);

  if ((pathname !== "/login" || pathname !== "/signup") && user === null) {
    return <Navigate to={"/login"} />;
  }

  return children;
};

export default ProtectedRoute;
