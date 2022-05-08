import { Box, Button, Card, CardContent, Divider, Grid, Typography } from '@mui/material';
import { Link } from "react-router-dom";
import { CartList, OrderSummary } from '../../components/cart';
import NavBar from '../../components/ui/NavBar/NavBar'


//import { ShopLayout } from '../../components/layouts';

const SummaryPage=()=>{
    return(
        //<ShopLayout title='Resumen de orden' pageDescription={'Resumen de la orden'} imageFullUrl={undefined}>
           <>
        <NavBar/>
        <Typography variant='h1' component='h1' sx={{mt:8}}> Resumen de la orden</Typography>

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
                              
                                    <Link to="/home">
                                        Editar
                                    </Link>
                          
                            </Box>

                            
                            <Typography>Gabriel Goliger</Typography>
                            <Typography>Rambla gandhi 359</Typography>
                            <Typography>Montevideo Uruguay</Typography>
                            <Typography>099944268</Typography>

                            <Divider sx={{my:1}}/>

                            <Box display='flex' justifyContent='end'>
                                
                                    <Link to="/home">
                                        Editar
                                    </Link>

                        
                            </Box>

                            <OrderSummary/>

                            <Box sx={{mt:3}}>
                                <Button color='secondary' className='circular-btn' fullWidth>
                                    Confirmar Orden
                                </Button>

                            </Box>

                            
                        </CardContent>
                        
                    </Card>
                </Grid>

            </Grid>


            </>
       // </ShopLayout>
    )
}

export default SummaryPage;