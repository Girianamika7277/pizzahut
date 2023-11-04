import React, { useContext } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import "../styles/loginForm.css";
import { useNavigate } from "react-router-dom";
import { Mycontext } from "../App";

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

const Login = () => {
  const { setLogin } = useContext(Mycontext);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const userData = JSON.parse(localStorage.getItem("userData"));

      if (
        userData &&
        userData.email === values.email &&
        userData.password === values.password
      ) {
        setLogin(true);
        navigate("/");
      } else {
        alert("Invalid credentials. Please try again.");
      }
    },
  });

  const navigateRegister = () => {
    navigate("/registration");
  };

  return (
    <>
      <div className="namelogo">
        <img
          className="logod"
          src="https://www.pizzahut.co.in/order/images/logos/logo_wide@x2.38f9109e24d22d58d048837b27f54390.png"
          alt="abc"
        />
      </div>
      <h1 className="logintext">LOGIN</h1>
      <div className="loginForm">
        <form onSubmit={formik.handleSubmit} className="formflex">
          <TextField
            fullWidth
            id="email"
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            className="textfield"
          />

          <TextField
            fullWidth
            id="password"
            name="password"
            label="Password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            className="textfield"
          />
          <div className="forbtn">
            <Button
              color="primary"
              className="subbtn"
              variant="contained"
              size="medium"
              type="submit"
            >
              Submit
            </Button>
            <div className="create-account">
              <p>
                Don't have an account?{" "}
                <Button color="secondary"  className="subbtn" size="medium" onClick={navigateRegister}>
                  Create Account
                </Button>
              </p>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
