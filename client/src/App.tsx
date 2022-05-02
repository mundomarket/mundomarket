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
<<<<<<< HEAD
import FormP from './components/Form nuevoproducto';
=======
import CrearProducto from './pages/formNuevoProdcto'
>>>>>>> 0b41db299014a1ec172b42e899c4bef7286c9045


function App() {
  return (
    <div className="App">
      <ThemeProvider theme={lightTheme}>
      <CssBaseline/>
      <Routes>
        <Route path='/' element={Landing()}/>
        <Route path='/home' element={Home()}/>
        <Route path='/product/:id' element={<Product/>}/>
        {/*<Route path='/detail/:id' render={(props)=><Product id={props.match.params.id}/>}/>*/}

        <Route path='/summary' element={Summary()}/>
        <Route path='/history' element={History()}/>
        <Route path='/cart' element={Cart()}/>
        <Route path='/login' element={Login()}/>
        <Route path='/register' element={Register()}/>
        <Route path='/crearproducto' element={CrearProducto()}/>

      </Routes>
      </ThemeProvider>
    </div>
  );
}
export default App;
