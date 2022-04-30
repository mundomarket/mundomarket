import {Box, Button, Card, CardContent, Divider, Grid,Typography} from '@mui/material';
import { CartList, OrderSumary } from '../../components/cart';
import NavBar from '../../components/ui/NavBar/NavBar'
//import { ShopLayout } from '../../components/layouts';

const CartPage=()=>{
    return(
        <>
            <NavBar/>
            <Typography variant='h1' component='h1'> Carrito</Typography>

            <Grid container>
                <Grid item xs={12} sm={7}>
                    <CartList editable/>
                </Grid>

                <Grid item xs={12} sm={5}>
                    <Card className='summary-card'>
                        <CardContent>
                            <Typography variant='h2'>Orden</Typography>
                            <Divider sx={{my:1}}/>

                            <OrderSumary/>
                            <Box sx={{mt:3}}>
                                <Button color='secondary' className='circular-btn' fullWidth>
                                    Checkout
                                </Button>

                            </Box>

                            
                        </CardContent>
                        
                    </Card>
                </Grid>

            </Grid>

            

 
       </>
    )
}

export default CartPage;