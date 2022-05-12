import React from 'react';
import './App.css';
import {Route,Routes} from 'react-router-dom'
import { CssBaseline, ThemeProvider } from '@mui/material'
import '../src/styles/globals.css'
import { lightTheme } from './themes/light-theme';

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
import Admin from './pages/admin/pageAdmin';

import Prueba from './pages/product/Recommended'

import { CartProvider } from '../src/components/cart/CartProvider';
import { SWRConfig } from 'swr';



function App() {
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
            <Route path='/home' element={Home()}/>
            <Route path='/product/:id' element={<Product/>}/>
            <Route path='/history/:id' element={<History/>}/>
            <Route path='/history/order/:id' element={<Order/>}/>
            <Route path='/admin' element={<Admin/>}/>

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
