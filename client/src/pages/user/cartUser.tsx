import {Box, Button, Card, CardContent, Divider, Grid,Typography} from '@mui/material';
import { useParams } from 'react-router-dom';
import { CartList, OrderSumary } from '../../components/cart';
import NavBar from '../../components/ui/NavBar/NavBar'
//import { ShopLayout } from '../../components/layouts';

const CartUser=()=>{

//ME TRAIGO LOS PRODUCTOS DEL USUARIO

/*
const {id} = useParams()
const dispatch=useAppDispatch()
useEffect(()=>{
  dispatch(GETDETAIL(id))
},[dispatch])
const product=useSelector((State:RootState) => State.rootReducer.detail); 
*/


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

export default CartUser;