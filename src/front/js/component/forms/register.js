import React, { useContext, useState } from "react";
import { Formik } from "formik";
import "../../../styles/home.css";

const Register = () => {
  const userValues = {
    email: "",
    username: "",
    password: "",
    passwordConfirm: "",
  };

  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const submit = async (values, { setSubmitting }) => {
    // e.preventDefault();
    setError(null);
    try {
      const resp = await fetch(`${process.env.BACKEND_URL}/api/user`, {
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
      if (resp.ok) setResult(data.result);
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

        if (!values.username) errors.username = "Username Required";
        if (!values.password) errors.password = "Password Required";
        if (!values.passwordConfirm)
          errors.passwordConfirm = "Passwords doesn't match";
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
            <label for="exampleInputEmail1" className="form-label">
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
            <label for="exampleInputEmail1" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              // required
              name="username"
              value={values.username}
              onChange={handleChange}
            />
            {errors.username && touched.username && (
              <p className="text-danger">{errors.username}</p>
            )}
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
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
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              // required
              id="exampleInputPassword1"
              name="passwordConfirm"
              value={values.passwordConfirm}
              onChange={handleChange}
            />
            {errors.passwordConfirm && touched.passwordConfirm && (
              <p className="text-danger">{errors.passwordConfirm}</p>
            )}
          </div>
          {error && (
            <p className="text-danger">{error}</p>
          )}
          {!result ? (
            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
              Register
            </button>
          ) : (
            <p className="text-success">User registered!</p>
          )}
        </form>
      )}
    </Formik>
  );
};

export default Register;
