import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import "../src/styles/globals.css";
import { lightTheme } from "./themes/light-theme";

import Landing from "./pages/landing";
import Home from "./pages/home";
import Product from "./pages/product/details";
import Summary from "./pages/checkout/summary";
import History from "./pages/orders/history";
import Cart from "./pages/cart";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import CrearProducto from "./pages/formNuevoProdcto";
import Profile from "./pages/profile";
import CartUser from "./pages/user/cartUser";

import Prueba from "./pages/product/Recommended";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

function App() {
  return (
    <div className="App">
      <PayPalScriptProvider
        options={{
          "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || " ",
        }}>
        <ThemeProvider theme={lightTheme}>
          <CssBaseline />
          <Routes>
            <Route path="/" element={Landing()} />
            <Route path="/home" element={Home()} />
            <Route path="/product/:id" element={<Product />} />

            <Route path="/user/:id" element={<CartUser />} />
            <Route path="/summary" element={Summary()} />
            <Route path="/history" element={History()} />
            <Route path="/cart" element={Cart()} />
            <Route path="/login" element={Login()} />
            <Route path="/register" element={Register()} />
            <Route path="/crearproducto" element={CrearProducto()} />
            <Route path="/profile" element={<Profile />} />

            <Route path="/prueba" element={<Prueba />} />
          </Routes>
        </ThemeProvider>
      </PayPalScriptProvider>
    </div>
  );
}
export default App;
