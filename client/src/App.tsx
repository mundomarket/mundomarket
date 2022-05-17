import React from 'react';
import './App.css';
import {Route,Routes,Navigate} from 'react-router-dom'
import { CssBaseline, ThemeProvider } from '@mui/material'
import '../src/styles/globals.css'
import { lightTheme } from './themes/light-theme';

import Landing from './pages/landing';
import Home from './pages/home'
import Product from './pages/product/details'
import Summary from './pages/orders/orderSummary'
import History from './pages/orders/history'
import Order from './pages/orders/orderPayment'
import Cart from './pages/cart'
import Login from './pages/auth/login'
import Register from './pages/auth/register'
import CrearProducto from './pages/product/formNewProduct'
import Profile from './pages/profile';
import NotFound from './pages/notfound'
import {useSelector} from 'react-redux'
import Admin from './pages/admin/pageAdmin';
import AdminUserList from './pages/admin/pageUsers';

import Prueba from './pages/product/Recommended'

import { CartProvider } from '../src/components/cart/CartProvider';
import { SWRConfig } from 'swr';
import {RootState} from './store'
import ModifyUser from './pages/profile/modifyUser';

import { PayPalScriptProvider} from "@paypal/react-paypal-js";



function App() {
  const isLogged=useSelector((state:RootState)=>state.rootReducer.isLogged)
  return (
    <div className="App">
<PayPalScriptProvider options={{ "client-id": 'AQ0xQs7KJfypFz2RqDQlSnT9qYlzBaGyXFsPaTVDQIbgpvD8n1TXUV5Qh-h6vzVdlzd4QjGDFdqOJrup' || '' }}>
       
<SWRConfig 
      value={{
        fetcher: (resource, init) => fetch(resource, init).then(res => res.json())
      }}
    >
      <CartProvider>
     
        <ThemeProvider theme={lightTheme}>
        <CssBaseline/>
          <Routes>

            <Route path='/' element={isLogged?<Navigate replace to='/home'/>:<Landing/>}/>
            <Route path='/home' element={Home()}/>
            <Route path='/product/:id' element={<Product/>}/>
            <Route path='/history/:id' element={<History/>}/>
            <Route path='/order/:id' element={<Order/>}/>
            <Route path='/admin/dashboard' element={<Admin/>}/>
            <Route path='/admin/users' element={<AdminUserList/>}/>

            <Route path='/summary' element={isLogged?<Summary/>:<Navigate replace to='/login'/>}/>
            <Route path='/cart' element={Cart()}/>
            <Route path='/login' element={isLogged?<Navigate replace to='/home'/>:<Login/>}/>
            <Route path='/register' element={isLogged?<Navigate replace to='/home'/>:<Register/>}/>
            <Route path='/crearproducto' element={isLogged?<CrearProducto/>:<NotFound/>}/>
            <Route path='/profile' element={isLogged?<Profile/>:<NotFound/>}/>
            <Route path='/modifyuser' element={isLogged?<ModifyUser/>:<NotFound/>}/>



          </Routes>
        </ThemeProvider>
  
      </CartProvider>

      </SWRConfig>
      </PayPalScriptProvider>
    </div>
  );
}
export default App;
