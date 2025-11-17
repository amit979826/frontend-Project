import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children, allowedRoles }) {
  const role = localStorage.getItem('role'); // get logged-in role

  // If role is allowed, render children, else redirect to login
  return allowedRoles.includes(role) ? children : <Navigate to="/" />;
}

export default ProtectedRoute;
