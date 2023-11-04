import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Button, TextField, CircularProgress } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/PaymentPage.css";

const validationSchema = yup.object({
  cardNumber: yup.string().required("Card Number is required"),
  expiryDate: yup.string().required("Expiry Date is required"),
  cvv: yup.string().required("CVV is required"),
  name: yup.string().required("Name on Card is required"),
  address: yup.string().required("Delivery Address is required"),
});

const PaymentPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { cartItems, totalAmount } = location.state;

  const handlePayment = (values) => {
    // Simulating the payment process with a delay
    setTimeout(() => {
      const orderId = Math.floor(10000 + Math.random() * 90000);

      navigate(`/order/${orderId}`, {
        state: {
          name: values.name,
          orderId,
          address: values.address,
          message: "Your order should be delivered shortly.",
          cartItems,
          totalAmount,
        },
      });
    }, 4000);
  };

  const formik = useFormik({
    initialValues: {
      cardNumber: "",
      expiryDate: "",
      cvv: "",
      name: "",
      address: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handlePayment(values);
    },
  });

  return (
    <>
      <div className="namelogo">
        <img
          className="logod"
          src="https://www.pizzahut.co.in/order/images/logos/logo_wide@x2.38f9109e24d22d58d048837b27f54390.png"
          alt="abc"
        />
      </div>
      <div className="registration">
      <h1 className="logintext">PAY SECURELY</h1>
        {formik.isSubmitting ? (
          <div className="loading-container">
            <CircularProgress size={64} />
          </div>
        ) : (
          <form onSubmit={formik.handleSubmit}>
            <div>
              <TextField
                fullWidth
                id="cardNumber"
                name="cardNumber"
                label="Card Number"
                value={formik.values.cardNumber}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.cardNumber && Boolean(formik.errors.cardNumber)
                }
                helperText={
                  formik.touched.cardNumber && formik.errors.cardNumber
                }
              />
            </div>
            <div>
              <TextField
                fullWidth
                id="expiryDate"
                name="expiryDate"
                label="Expiry Date"
                value={formik.values.expiryDate}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.expiryDate && Boolean(formik.errors.expiryDate)
                }
                helperText={
                  formik.touched.expiryDate && formik.errors.expiryDate
                }
              />
            </div>
            <div>
              <TextField
                fullWidth
                id="cvv"
                name="cvv"
                label="CVV"
                value={formik.values.cvv}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.cvv && Boolean(formik.errors.cvv)}
                helperText={formik.touched.cvv && formik.errors.cvv}
              />
            </div>
            <div>
              <TextField
                fullWidth
                id="name"
                name="name"
                label="Name on Card"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />
            </div>
            <div>
              <TextField
                fullWidth
                id="address"
                name="address"
                label="Delivery Address"
                multiline
                rows={4}
                value={formik.values.address}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.address && Boolean(formik.errors.address)}
                helperText={formik.touched.address && formik.errors.address}
              />
            </div>
            <div className="payment-button">
            <Button
              type="submit"
              variant="contained"
              color="primary"
              
            >
              Make Payment
            </Button>
            </div>
          </form>
        )}
      </div>
    </>
  );
};

export default PaymentPage;
