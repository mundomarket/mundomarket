import React from 'react';
//import { ShopLayout } from '../components/layouts/ShopLayout';
import { Grid, Box , Typography, Button, Container, TextField} from '@mui/material';
//import { initialData } from '../../database/products';
import { ProductSlideshow } from '../../components/products';
import { Link } from "react-router-dom";
//import { ItemCounter } from '../../components/ui';
//import { SizeSelector } from '../../components/products/SizeSelector';

import Login from '../auth/login'

const imagenes =  [
    'https://www.prensa-latina.cu/wp-content/uploads/2021/12/1590688735_728767_1590688895_noticia_normal.jpg',
    'https://media.informabtl.com/wp-content/uploads/2017/06/bigstock-health-care-dental-hygiene-p-121230014-e1498502524872.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9nzwwI9EeHkX1U4vQ5LRx2yefOZ-WhOD_tQ&usqp=CAU',
    'https://www.gndiario.com/sites/default/files/styles/noticia_detalle_noticia_2_1/public/noticias/como-tecnologia-cambia-vidas.jpg?h=a658af3b&itok=8k_S29_T',
    

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
        
                        <Grid item xs={6} sm={10} rowSpacing={10}>
                            <ProductSlideshow
                                images={imagenes}
                                duration={3000}
                                autoPlay={true}
                            />
                                   
                        </Grid>
                        
                        <Grid >
                            <Link to="/home">
                                        <Button  sx={{mt:1}} color ='secondary' className='circular-btn' fullWidth>    
                                            HOME
                                    </Button>
                            </Link>
                        </Grid>
        
                        

            </Container>

            <Grid >
                <Login/>
            </Grid>
            
        </Grid>


        </div>

       

       
    )
}

export default Landing