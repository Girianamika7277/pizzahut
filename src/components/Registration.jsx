import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import "../styles/registration.css";

const validationSchema = yup.object({
  name: yup.string("Enter your name").required("Name is required"),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  phone: yup
    .string("Enter your phone number")
    .required("Phone number is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
  confirmPassword: yup
    .string("Confirm your password")
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

const Registration = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      localStorage.setItem("userData", JSON.stringify(values));
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        navigate("/login");
      }, 2000);
    },
  });

  const navigateLogin = () =>{
    navigate("/login");
  }

  if (isLoading) {
    return (
      <div className="lodders">
        <img
          src="https://www.pizzahut.co.in/order/images/icons/delivery-bike-64x64.b0edef40e987a25aebdd591709d43db7.gif"
          alt="Loading..."
          className="loderImage"
        />
      </div>
    );
  }

  return (
    <>
      <div className="namelogo">
        <img
          className="logod"
          src="https://www.pizzahut.co.in/order/images/logos/logo_wide@x2.38f9109e24d22d58d048837b27f54390.png"
          alt="abc"
        />
      </div>
      <h1 className="logintext">CREATE ACCOUNT</h1>
      <div className="registration">
        <form onSubmit={formik.handleSubmit} className="formflex">
          <TextField
            fullWidth
            id="name"
            name="name"
            label="Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />

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
          />

          <TextField
            fullWidth
            id="phone"
            name="phone"
            label="Phone Number"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.phone && Boolean(formik.errors.phone)}
            helperText={formik.touched.phone && formik.errors.phone}
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
          />

          <TextField
            fullWidth
            id="confirmPassword"
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.confirmPassword &&
              Boolean(formik.errors.confirmPassword)
            }
            helperText={
              formik.touched.confirmPassword && formik.errors.confirmPassword
            }
          />
          <div className="forbtn">
            <Button
              color="primary"
              className="subbtn"
              size="small"
              variant="contained"
              type="submit"
            >
              Register
            </Button>

            <div className="login-link">
              <p>Have an account?</p>
              <Button color="secondary" onClick={navigateLogin}>
                Login
              </Button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Registration;
