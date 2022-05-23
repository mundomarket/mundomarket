//import { ShopLayout } from '../components/layouts';

import React from "react";
import { Typography,Divider, Box, Grid } from '@mui/material';
import NavBar from '../src/NavBar/NavBar'
//import { initialData } from '../../database/products';
import { ProductCard } from './Products';

import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { AppDispatch,RootState } from './store/index';
import {GETPRODUCTS} from './actions'
import { TypedUseSelectorHook } from "react-redux";

const useAppDispatch = () => useDispatch<AppDispatch>();
//const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default function Home() {
  
  const dispatch=useAppDispatch()

  useEffect(()=>{
    dispatch(GETPRODUCTS())
  },[dispatch])
  //const products = useSelector((State) => State.products);
  const productos=useSelector((State:RootState) => State.rootReducer.productos); 

  
  
  return (
    <div>
        <Box position='fixed' width='100%' sx={{ zIndex: 'tooltip' }}>
          <NavBar/>
        </Box>
        
        <Box sx={{marginY:10}}>
          <Box sx={{display:'flex',flexDirection:'column',alignItems:'flex-start'}}>
            <Typography variant='h5' sx={{marginLeft:3}}> PRODUCTOS </Typography>
          </Box>
          <Divider sx={{m:2,marginBottom:3}}/>

          
        </Box>

        {productos[0]?<Box sx={{marginX:3}}>
        <Grid container spacing ={3} >
            {
                
                productos.map((product:any) =>(
                    <ProductCard
                        key={product._id}
                        product={product}
                    />
                ))

            }
        </Grid>
        </Box>:<div><h1>No hay productos para esta busqueda</h1></div>
}
    </div>
  )
}
