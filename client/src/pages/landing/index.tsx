import React from "react";
//import { ShopLayout } from '../components/layouts/ShopLayout';

import { Grid, Box , Typography, Button, Container, TextField} from '@mui/material';
//import { initialData } from '../../database/products';
import { ProductSlideshow } from "../../components/products";
import { Link } from "react-router-dom";
//import { ItemCounter } from '../../components/ui';
//import { SizeSelector } from '../../components/products/SizeSelector';


import Login from '../auth/login'

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
        <Typography  gutterBottom variant='h1' component='h1' justifyContent={'center'}>
       
                Donde comprar y vender de todo

        </Typography>


        <Grid >
        
                <Container maxWidth="xl">
            
                            <Grid  xs={20} sm={4} rowSpacing={5} display='flex' flexDirection='column'>
                                <ProductSlideshow
                                    images={imagenes}
                                />
                               
                               
                            </Grid>
                            
    
                            <Grid >
                                
                                <Link to="/home">
                                         <Button  sx={{mt:1}} color ='secondary' className='circular-btn' fullWidth>    
                                             HOME
                                        </Button>
                                </Link>
                                

                            </Grid>
          
                            <Login/>

                            </Container>
            
        </Grid>


        </div>

       

       
    )
}

export default Landing