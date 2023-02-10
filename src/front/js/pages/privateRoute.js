import React, { useContext } from "react";
import { Route, Navigate, Outlet, useLocation  } from "react-router-dom";
import { Context } from "../store/appContext";

// import Loading from "./../components/Loading";
export default function PrivateRoute({ children }) {
  const { store, actions } = useContext(Context);
  let location = useLocation();

  if(!store.user) {
    return <Navigate to="/login" state={{ from: location}} replace />
  }
  return children
}
