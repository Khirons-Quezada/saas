import React, { useEffect } from "react";
import { useAuthContext } from "../../contexts/authContext";

export default function LogoutPage() {
  const { logout } = useAuthContext();
  useEffect(() => logout());
  return null;
}
