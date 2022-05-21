import React, { useEffect, useReducer } from "react";
import '@fontsource/roboto/300.css';
import { Grid, Box , Typography, Button, Container, TextField} from '@mui/material';
import { ProductSlideshow } from "./Products";
import { Link } from "react-router-dom";
import Cookie from 'js-cookie';
import { CartContext, cartReducer } from './Cart';
import { ICartProduct } from './Cart/cartInterface';


import Login from './Login/login'

const imagenes =  [
    'https://www.puredistance.com/wp-content/uploads/2017/06/puredistance-crystal-column-gold-black-st05.png',
    'https://www.hdhouse.ru/data/images/V30.png',
    'https://www.smstotalmarketing.com/images/camisetas-crop-u59655.png?crc=4278773244',
    'https://www.joyeriamore.com/media/catalog/product/cache/536fc87119e82c154feb6f8b63241ab9/f/1/f1d7cb3b8f548c856f250a5300c4a50cf08c7d332834d7224a46faaff6325a88.jpeg',
    

]




const Landing = () => {


    return (
        <Box sx={{display:'flex',flexDirection:'column',alignItems:'center'}}>
        <Container sx={{display:'flex',justifyContent:'center',m:3,alignItems:'center'}}>
            <Box sx={{width:{xs:'50%',sm:'20%'},m:{xs:0,sm:3},display:'block'}}>
                <ProductSlideshow
                    images={imagenes}
                    duration={1000}
                    autoPlay={true}
                />
            </Box>
            <Box>
                <Login/>
            </Box>
        </Container>
        </Box>
    )
}

export default Landing