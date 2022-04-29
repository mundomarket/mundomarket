//import { ShopLayout } from '../components/layouts';
import { Typography,Grid, CardActionArea,Card, CardMedia } from '@mui/material';
import NavBar from '../../components/ui/NavBar/NavBar'
import { initialData } from '../../database/products';
import { ProductList } from '../../components/products';

import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

export default function Home() {

  //const products = useSelector((State) => State.products);

  return (
    <div>
        <NavBar/>
        <Typography variant='h1' component='h1'> Tienda </Typography>
        <Typography variant='h2' sx={{marginBottom: 1}}> Todos los productos </Typography>

        <ProductList 
            products={initialData.products as any}
        />
    </div>
  )
}
