import React, { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Formik } from "formik";
import { Context } from "../../store/appContext";
import useAuth from "../../hooks/useAuth";
import "../../../styles/home.css";

const Login = () => {
  const navigate = useNavigate();
  const { store, actions } = useContext(Context);
  const { setUserContext } = useAuth();
  const userValues = {
    email: "",
    password: ""
  };

  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const submit = async (values, { setSubmitting }) => {
    // e.preventDefault();
    setError(null);
    try {
      const resp = await fetch(`${process.env.BACKEND_URL}/api/token`, {
        method: "POST",
        body: JSON.stringify({
          ...values,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(resp.ok);
      console.log(resp.status);
      // console.log(resp.text());
      const data = await resp.json();
      console.log(data);
      setSubmitting(false);
      if (resp.ok) {
        localStorage.setItem("jwt-token", data.token);
        actions.storeToken(data.token);
        await setUserContext();
        navigate('/private');
      }
      else setError(`Something went wrong: ${data.msg}`);
    } catch (e) {
      console.log(e);
      setSubmitting(false);
      setError(`Something went wrong: ${e}`);
    }
  };

  return (
    <Formik
      initialValues={userValues}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Email Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }

        if (!values.password) errors.password = "Password Required";

        return errors;
      }}
      onSubmit={submit}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              // required
              name="email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && touched.email && (
              <p className="text-danger">{errors.email}</p>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              // required
              id="exampleInputPassword1"
              name="password"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && touched.password && (
              <p className="text-danger">{errors.password}</p>
            )}
          </div>
          {error && <p className="text-danger">{error}</p>}
          <button
            type="submit"
            className="btn btn-primary"
            disabled={isSubmitting}
          >
            Login
          </button>
        </form>
      )}
    </Formik>
  );
};

export default Login;
