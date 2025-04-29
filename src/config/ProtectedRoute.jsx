import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }) => {
  const { user } = useSelector((state) => state.auth);

  if (!user) {
    // Kullanıcı yoksa login sayfasına yönlendir
    return <Navigate to="/login" replace />;
  }

  // Kullanıcı varsa erişime izin ver
  return children;
};

export default ProtectedRoute;
