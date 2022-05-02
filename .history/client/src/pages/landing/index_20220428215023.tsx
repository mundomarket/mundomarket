import React from 'react';
//import { ShopLayout } from '../components/layouts/ShopLayout';
import { Grid, Box , Typography, Button, Container} from '@mui/material';
//import { initialData } from '../../database/products';
import { ProductSlideshow } from '../../components/products';
import { Link } from "react-router-dom";
//import { ItemCounter } from '../../components/ui';
//import { SizeSelector } from '../../components/products/SizeSelector';

const imagenes =  [
    'como-tecnologia-cambia-vidas.jpg',
    'deportes.jpg',
    'cuidado.jpg',
    'hogar.jpg'

]

const Landing = () => {
    return (

        <div>
    {/*<ShopLayout title = {"Mundo Maket"} pageDescription={"Bienvenido"} imageFullUrl="any">*/}
        <Typography variant='h1' component='h1' justifyContent={'center'}> Donde comprar y vender de todo</Typography>


        <Grid >
            <Container maxWidth="xl">
            
                            <Grid item xs={6} sm={10} rowSpacing={10}>
                                <ProductSlideshow
                                    images={imagenes}
                                />
                            </Grid>
                            <Box flex={1}/>
                            <Grid item xs={12} sm={5} >
                                <Box display='flex' flexDirection='column'>
                                <Link to="/home">
                                         <Button  sx={{mt:3}} color ='secondary' className='circular-btn'>
                                         
                                             HOME
                                        
                                        </Button>
                                        </Link>
                                </Box>

                            </Grid>
            </Container>
                

            
        </Grid>


        </div>

       

       
    )
}

export default Landing