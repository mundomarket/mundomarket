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
import Cart from './pages/cart'
import Login from './pages/auth/login'
import Register from './pages/auth/register'
import CrearProducto from './pages/formNuevoProdcto'
import Profile from './pages/profile';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={lightTheme}>
      <CssBaseline/>
      <Routes>
        <Route path='/' element={Landing()}/>
        <Route path='/home' element={Home()}/>
        <Route path='/product/:id' element={<Product/>}/>

        <Route path='/summary' element={Summary()}/>
        <Route path='/history' element={History()}/>
        <Route path='/cart' element={Cart()}/>
        <Route path='/login' element={Login()}/>
        <Route path='/register' element={Register()}/>
        <Route path='/crearproducto' element={CrearProducto()}/>
        <Route path='/profile' element={<Profile/>}/>



      </Routes>
      </ThemeProvider>
    </div>
  );
}
export default App;
