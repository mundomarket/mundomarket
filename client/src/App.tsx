import React from 'react';
import './App.css';
import {Route,Routes} from 'react-router-dom'
import { CssBaseline, ThemeProvider } from '@mui/material'
import '../src/styles/globals.css'
import { lightTheme } from './themes/light-theme';
import { Navigate } from "react-router-dom";

import Landing from './pages/landing';
import Home from './pages/home'
import Product from './pages/product/details'
import Summary from './pages/checkout/summary'
import History from './pages/orders/history'
import Order from './pages/orders/ordenResumen'
import Cart from './pages/cart'
import Login from './pages/auth/login'
import Register from './pages/auth/register'
import CrearProducto from './pages/product/formNewProduct'
import Profile from './pages/profile';

import Prueba from './pages/product/Recommended'

import { CartProvider } from '../src/components/cart/CartProvider';
import { SWRConfig } from 'swr';
import { useState, useEffect } from "react";
import any from 'react/jsx-runtime';

import { AppDispatch,RootState } from './store/index';
import {useDispatch,useSelector} from "react-redux"

import {LOGINUSERGOOGLESUCCESS} from './actions/index';

function App() {
  const isLogged=useSelector((state:RootState)=>state.rootReducer.isLogged)
  const user=useSelector((state:RootState)=>state.rootReducer.user)
  const useAppDispatch = () => useDispatch<AppDispatch>();
  const dispatch=useAppDispatch()
  useEffect(()=>{
    //console.log("entre al useEffect")
    dispatch(LOGINUSERGOOGLESUCCESS());
  },[])
  // useEffect(()=>{
  //   const getUser= async ()=>{
  //     fetch("http://localhost:3000/oauth/login/success",{
  //       method:"GET",
  //       credentials:"include"        
  //     }).then(response=>{
  //       if(response.status === 200) return response.json();
  //       throw new Error ("authentication has been failed!")
  //     }).then((resObject)=>{
  //       setUser(resObject.user);
  //     })
  //     .catch((err)=>{
  //       console.log(err);
  //     });
  //   };
  //   getUser();
  // },[])
  console.log("Usuario:",user)
  return (
    <div className="App">

<SWRConfig 
      value={{
        fetcher: (resource, init) => fetch(resource, init).then(res => res.json())
      }}
    >
      <CartProvider>
     
        <ThemeProvider theme={lightTheme}>
        <CssBaseline/>
          <Routes>

            <Route path='/' element={Landing()}/>
            <Route path='/home' element={Home()} />
            <Route path='/product/:id' element={<Product/>}/>
            <Route path='/history/:id' element={<History/>}/>
            <Route path='/history/order/:id' element={<Order/>}/>

            <Route path='/summary' element={Summary()}/>
            <Route path='/cart' element={Cart()}/>
            <Route path='/login' element={Login()}/>
            <Route path='/register' element={Register()}/>
            <Route path='/crearproducto' element={CrearProducto()}/>
            <Route path='/profile' element={<Profile/>}/>

            <Route path='/prueba' element={<Prueba/>}/>



          </Routes>
        </ThemeProvider>
  
      </CartProvider>

      </SWRConfig>
    </div>
  );
}
export default App;
