import { Box, Button, Card, CardContent, Divider, Grid, Typography, Link, Chip } from '@mui/material';
import { CartContext, CartList, OrderSummary } from '../../components/cart';
//import NextLink from 'next/link'

//import { ShopLayout } from '../../components/layouts';
import { CreditCardOffOutlined, CreditScoreOutlined } from '@mui/icons-material';

import { PayPalButtons } from "@paypal/react-paypal-js";
import { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from '../../store';
import { useParams } from 'react-router-dom';
import { GETORDER, PAYORDER } from '../../actions';
import { IOrder } from './orderInterface';

export type OrderResponseBody = {
    id: string;
    status:
        | "COMPLETED"
        | "SAVED"
        | "APPROVED"
        | "VOIDED"
        | "PAYER_ACTION_REQUIRED";
};



const useAppDispatch = () => useDispatch<AppDispatch>();



const OrderPage=()=>{

    const dispatch=useAppDispatch()
    const { cart,total } = useContext(CartContext);
    const {id} = useParams()
    

    const order=useSelector((State:RootState) => State.rootReducer.orden);
    const [isPaid,setIsPaid]=useState(order.isPaid?true:false)
    const onOrderCompleted = async( details: OrderResponseBody ) => {

        
        if ( details.status !== 'COMPLETED' ) {
            return alert('No hay pago en Paypal');
        }
    
        //setIsPaying(true);
    
        try {
            console.log("verifico idOrden:", order._id)
        
            dispatch(PAYORDER({transactionId: details.id, orderId: order._id}))
            //dispatch(GETORDER(id))
            setIsPaid(()=>true)
    
        } catch (error) {
            //setIsPaying(false);
            console.log(error);
            alert('Error');
        }
    
    //   window.location.reload();
     
    }







    return(
        <>
            <Typography variant='h1' component='h1'> Orden: {order._id}</Typography>
            {isPaid===false?
                    <Chip
                        sx={{my:2}}
                        label="pendiente de pago"
                        variant='outlined'
                        color="error"
                        icon={ <CreditCardOffOutlined/>}
                    />

                    :<Chip
                        sx={{my:2}}
                        label="La orden ya fue pagada"
                        variant='outlined'
                        color="success"
                        icon={ <CreditScoreOutlined/>}
                    />
            }           

            <Grid container>


                <Grid item xs={12} sm={7}>
                    <CartList editable={false}/>
                </Grid>

                <Grid item xs={12} sm={5}>
                    <Card className='summary-card'>
                        <CardContent>
                            <Typography variant='h2'>Resumen</Typography>
                            <Divider sx={{my:1}}/>

                            <Box display='flex' justifyContent='space-between'>
                                <Typography variant='subtitle1'> Dirección de entrega</Typography>
                               
                                    <Link underline='always'>
                                        Editar
                                    </Link>
       
                            </Box>

                            
                            {/*<Typography>{order.user.name}</Typography>
                            <Typography>{order.adress}</Typography>
                            <Typography>{order.user.country}</Typography>
                            <Typography>{order.user.phone}</Typography>*/}
                            <Typography>{}</Typography>
                            <Typography>{}</Typography>
                            <Typography>{}</Typography>
                            <Typography>{}</Typography>

                            <Divider sx={{my:1}}/>

                            <Box display='flex' justifyContent='end'>
                                
                                    <Link underline='always'>
                                        Editar
                                    </Link>

                               
                            </Box>

                            <OrderSummary/>

                            <Box sx={{mt:3}}>
                                

                            {
                                isPaid?
                                <Chip
                                    sx={{my:2}}
                                    label="La orden ya fue pagada"
                                    variant='outlined'
                                    color="success"
                                    icon={ <CreditScoreOutlined/>}
                                />
                                :
                                <PayPalButtons 
                                    createOrder={(data, actions) => {
                                        return actions.order.create({
                                            purchase_units: [
                                                {
                                                    amount: {
                                                        
                                                        //value: `${setTimeout(()=>order.TotalPrice,1000)}`,
                                                        value: `${order.totalPrice}`,
                                                        //value: `${total}`,
                                                        //value: `${handlePrice()}`
                                                        //value: `${finalOrder.totalPrice}`,
                                                
                                                    },
                                                },
                                            ],
                                        });
                                    }}
                                    onApprove={(data, actions) => {
                                        return actions.order!.capture().then((details) => {
                                            console.log({ details  })
                                                onOrderCompleted( details );
                                                
                                               // const name = details.payer.name!.given_name;
                                               // alert(`Transaction completed by ${name}`);
                                        });
                                    }}
                                />
                                }
                            
                            
                                        

                            </Box>

                            
                        </CardContent>
                        
                    </Card>



                </Grid>


                

            </Grid>
            </>

    )
}

export default OrderPage;