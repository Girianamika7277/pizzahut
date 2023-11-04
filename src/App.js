import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import OrderDetails from './components/OrderDetails'
import Footer from './components/Footer'

import Cart from './components/Cart'
import PaymentPage from './components/PaymentPage'
import Login from './components/Login'
import Registration from './components/Registration'

export const Mycontext = React.createContext()

function App() {
  const [login, setLogin] = useState(false);
  const data = {
    login,
    setLogin
  }

  return (
  <Mycontext.Provider value={data}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/payment" element={<PaymentPage/>} />
        <Route path="/order/:id" element={<OrderDetails />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path='/registration' element={<Registration/>}/>

      </Routes>
      <Footer/>

    </BrowserRouter>
    </Mycontext.Provider>
  )
}

export default App