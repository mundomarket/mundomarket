//import { ShopLayout } from '../../components/layouts/ShopLayout';
import { Grid, Box , Typography, Button, Chip} from '@mui/material';
import { initialData } from '../../database/products';
import { ProductSlideshow } from '../../components/products';
import { ItemCounter } from '../../components/ui';
import { SizeSelector } from '../../components/products/SizeSelector';
import NavBar from '../../components/ui/NavBar/NavBar'
import {useParams} from "react-router-dom"

import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { AppDispatch,RootState } from '../../store/index';
import {GETDETAIL} from '../../actions'
import { TypedUseSelectorHook } from "react-redux";
const useAppDispatch = () => useDispatch<AppDispatch>();


//const product =  initialData.products[0];

const ProductPage = () => {

    const {id} = useParams()
    
    const dispatch=useAppDispatch()

    useEffect(()=>{
      dispatch(GETDETAIL(id))
    },[dispatch])
    //const products = useSelector((State) => State.products);
    const product=useSelector((State:RootState) => State.rootReducer.detail); 
    
    return (
        
        //<ShopLayout title = {product.title} pageDescription={product.description} imageFullUrl="any">
        <>
            <NavBar/>

            
            
            <Grid container spacing={8} mt={3}>

                {
                product.imageProduct?
                    <Grid item xs={12} sm={5}>
                        <ProductSlideshow
                            images={product.imageProduct}
                            duration={3000}
                            autoPlay={true}
                        />
                    </Grid>:null
                }

                <Grid item xs={12} sm={5}>
                    <Box display='flex' flexDirection='column'>

                        <Typography variant='h1' component='h1'> {product.name}</Typography>
                        <Typography variant='subtitle1' component='h2' mt={1}> {`$${product.price}`}</Typography>

                        

                        <Box sx={{my:2}}>
                            <Typography variant='subtitle2'>Cantidad </Typography>
                            <ItemCounter />
                            
                            {/*<SizeSelector 
                                //selectedSize={product.sizes[0]} 
                                sizes={product.sizes}/>*/}
                        </Box>

                        

                        <Button color ="secondary" className='circular-btn'>
                            Agregar al carrito
                        </Button>

                        {/*<Chip label ="no hay disponibles" color="error" variant='outlined'/>*/}

                        <Box sx={{mt:3}}>
                        
                            <Typography variant='subtitle2'>Descripción</Typography>
                            
                            <Typography variant='body2'>{product.description}</Typography>
                        </Box>

                    </Box>


                </Grid>

            </Grid>

      

    </>
    )
}

export default ProductPage