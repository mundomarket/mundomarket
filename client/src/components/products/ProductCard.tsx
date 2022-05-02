import React from 'react'
import { useState, useEffect,useMemo } from "react";
import {FC} from 'react'
import { Link } from "react-router-dom";



import {Grid,Card,CardActionArea,CardMedia, Typography, Box} from '@mui/material'

import {IProduct} from '../../interfaces'


interface Props{
    product: IProduct;
}

export const ProductCard: FC <Props> = ( {product}) =>{

//export default function ProductCard({product:string}){

    const [isHovered, setIsHovered] = useState (false);
/*
    const productImage = useMemo(()=>{
        return isHovered
        ? `products/${product.images[1]}`
        : `products/${product.images[0]}`
         
    },[isHovered,product.images])
*/



    return(
        <Grid 
            item xs={6} 
            sm={3} 
            key = {product._id} 
            onMouseEnter={()=> setIsHovered(true)}
            onMouseLeave={()=> setIsHovered(false)}
        >
            <Link to={`/product/${product._id}`}>
              <Card>

                        <CardActionArea>
                            <CardMedia
                                component='img'
                                className='fadeIn'
                                image={product.imageProduct[0]}
                                alt={product.name}
                                onLoad={()=>console.log('cargo')}
                            />
                        </CardActionArea>


              </Card>
            </Link>

            <Box sx={{mt:1}} className='fadeIn'>
                <Typography fontWeight={700}>{product.name}</Typography>
                <Typography fontWeight={700}>{`$${product.price}`}</Typography>

            </Box>
        </Grid>
    )
}