import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { LOGIN } from "../../config/routes/paths";
import { useAuthContext } from "../../contexts/authContext";
import Navbar from "../NavBar/Navbar";
import { ToastContainer, toast } from 'react-toast'

export default function PrivateRoute() {
  const { isAuthenticated } = useAuthContext();

  if (!isAuthenticated) return <Navigate to={LOGIN} />;
  return (
    <>
      <Navbar />
      <Outlet />
      <ToastContainer delay={3000} position="bottom-right" />
    </>
  );
}
