import React from 'react';
import { useLocation, useNavigate, } from 'react-router-dom';
import PrintIcon from '@mui/icons-material/Print';
import { Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import "../styles/OrderDetails.css"


const OrderDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { name, orderId, address, message, cartItems, totalAmount } = location.state;

  const handlePrintReceipt = () => {
    window.print();
  };

  const handleGoHome = () => {
    navigate('/');
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
    <div className="order-details">
      <h1 className='logintext'>Congratulations </h1>
      <h5>
        {message}
      </h5>
      <p>
        <strong>Name: </strong> {name}
      </p>
      <p>
        <strong>Order ID:</strong> {orderId}
      </p>
      <p>
        <strong>Delivery Address:</strong> {address}
      </p>
      <h3>Items:</h3>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - ₹ {item.price} x {item.quantity}
          </li>
        ))}
      </ul>
      <p>
        <strong>Total Amount:</strong> ₹ {totalAmount}
      </p>
      <div className='flexbtn'>
        <Button onClick={handlePrintReceipt}  variant="contained" endIcon={<PrintIcon/>}>Print Receipt</Button>
        <Button onClick={handleGoHome} variant="contained" endIcon={<HomeIcon/>}>Go to Home</Button>
      </div>
    </div>
    </>
  );
};

export default OrderDetails;
