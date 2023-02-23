import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Private = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center">
      <h1>Hello there {store.user?.username}!</h1>
    </div>
  );
};