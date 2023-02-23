import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import RegisterForm from "../component/forms/register";
import LoginForm from "../component/forms/login";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Login = () => {
  const { store, actions } = useContext(Context);

  return (
    <div>
      <div className="mt-5 p-3 w-50 m-auto backgroundGame text-white ">
        <LoginForm />
      </div>
    </div>
  );
};
