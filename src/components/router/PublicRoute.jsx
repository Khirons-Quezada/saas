import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { PRIVATE } from "../../config/routes/paths";
import { useAuthContext } from "../../contexts/authContext";

export default function PublicRoute() {
  const { isAuthenticated } = useAuthContext(); 
  console.log(isAuthenticated);

  if (isAuthenticated) return <Navigate to={PRIVATE} />;
  return (
    <>
      <Outlet />
    </>
  );
}
