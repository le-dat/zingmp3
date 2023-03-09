import React from "react";
import { Navigate, Outlet } from "react-router-dom";

import { LOGIN } from "../constants";
import { useAuthContext } from "./AuthProvider";

const PrivateRouter: React.FC = () => {
  const { currentUser } = useAuthContext();
  return currentUser ? <Outlet /> : <Navigate to={`/${LOGIN}`} />;
};

export default PrivateRouter;
