import React from 'react';
import './App.css';
import {Route,Routes,Navigate} from 'react-router-dom'
import { CssBaseline, ThemeProvider } from '@mui/material'
import '../src/styles/globals.css'
import { lightTheme } from './themes/light-theme';

import Landing from './pageLanding';
import Home from './pageHome'
import Product from './Products/pageProductDetails'
import Summary from './Orders/pageOrderSummary'
import History from './Orders/pageOrderHistory'
import Order from './Orders/pageOrderPayment'
import Cart from './Cart/pageCart'
import Login from './Login/login'
import Register from './Login/register'
import CrearProducto from './Products/pageCreateProduct'
import Profile from './Profile';
import NotFound from './Profile'
import {useSelector} from 'react-redux'
import Admin from './Admin/pageAdmin';
import AdminUserList from './Admin/pageUsers';

import { CartProvider } from './Cart/CartProvider';
import { SWRConfig } from 'swr';
import {RootState} from './store'
import ModifyUser from './Profile/modifyUser';

import { PayPalScriptProvider} from "@paypal/react-paypal-js";



function App() {
  const verifyAdmin=(user:any)=>{
    if(!user.roles){
      return false
    }
    else{
      if(user.roles[0].name==='admin')return true;
      else return false
    }
  }
  const isLogged=useSelector((state:RootState)=>state.rootReducer.isLogged)
  const user=useSelector((state:RootState)=>state.rootReducer.user)
  const isAdmin=verifyAdmin(user)



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
            <Route path='/history' element={isLogged?<History/>:<NotFound/>}/>
            <Route path='/order/:id' element={<Order/>}/>
            <Route path='/admin/dashboard' element={isAdmin?<Admin/>:<NotFound/>}/>
            <Route path='/admin/users' element={isAdmin?<AdminUserList/>:<NotFound/>}/>

            <Route path='/summary' element={<Summary/>}/>
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
