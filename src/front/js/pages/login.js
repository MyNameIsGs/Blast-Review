import React from "react";
import LoginForm from "../component/forms/login";
import "../../styles/home.css";

export const Login = () => {

  return (
    <div>
      <div className="mt-5 p-3 w-50 m-auto backgroundGame text-white ">
        <LoginForm />
      </div>
    </div>
  );
};
