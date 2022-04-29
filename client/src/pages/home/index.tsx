//import { ShopLayout } from '../components/layouts';

import React from "react";
import { Typography,Grid, CardActionArea,Card, CardMedia, Box } from '@mui/material';
import NavBar from '../../components/ui/NavBar/NavBar'
import { initialData } from '../../database/products';
import { ProductList } from '../../components/products';

import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { AppDispatch,RootState } from '../../store/index';
import {GETPRODUCTS} from '../../actions'
import { TypedUseSelectorHook } from "react-redux";

const useAppDispatch = () => useDispatch<AppDispatch>();
//const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default function Home() {
  
  useEffect(()=>{
    dispatch(GETPRODUCTS())
  })
  //const products = useSelector((State) => State.products);
  const dispatch=useAppDispatch()

  const productos=useSelector((State:RootState) => State.rootReducer.productos); 

  console.log(productos)

  return (
    <div>
        <Box position='fixed' width='100%' sx={{ zIndex: 'tooltip' }}>
          <NavBar/>
        </Box>
        
        <Typography variant='h1' component='h1'> Tienda </Typography>
        <Typography variant='h2' sx={{marginBottom: 1}}> Todos los productos </Typography>

        <ProductList
            products={initialData.products as any}
          // products={productos}
        />
    </div>
  )
}
