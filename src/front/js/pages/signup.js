import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import RegisterForm from "../component/forms/register";

import "../../styles/home.css";

export const Signup = () => {
  const { store, actions } = useContext(Context);

  return (
    <div>
      <div className="mt-5 w-50 m-auto backgroundGame text-white p-3">
        <RegisterForm />
      </div>
    </div>
  );
};
