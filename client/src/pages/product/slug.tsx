//import { ShopLayout } from '../../components/layouts/ShopLayout';
import { Grid, Box , Typography, Button, Chip} from '@mui/material';
import { initialData } from '../../database/products';
import { ProductSlideshow } from '../../components/products';
import { ItemCounter } from '../../components/ui';
import { SizeSelector } from '../../components/products/SizeSelector';

const product =  initialData.products[0];

const ProductPage = () => {
    return (
        //<ShopLayout title = {product.title} pageDescription={product.description} imageFullUrl="any">

            <Grid container spacing={3}>
                <Grid item xs={12} sm={7}>
                    <ProductSlideshow
                        images={product.images}
                    />

                </Grid>

                <Grid item xs={12} sm={5}>
                    <Box display='flex' flexDirection='column'>

                        <Typography variant='h1' component='h1'> {product.title}</Typography>
                        <Typography variant='subtitle1' component='h2'> {`$${product.price}`}</Typography>

                        

                        <Box sx={{my:2}}>
                            <Typography variant='subtitle2'>Cantidad </Typography>
                            <ItemCounter/>
                            {/*<SizeSelector 
                                //selectedSize={product.sizes[0]} 
                                sizes={product.sizes}/>*/}

                        </Box>

                        

                        <Button color ="secondary" className='circular-btn'>
                            agregar al carrito
                        </Button>

                        {/*<Chip label ="no hay disponibles" color="error" variant='outlined'/>*/}

                        <Box sx={{mt:3}}>
                            <Typography variant='subtitle2'>Descripcioón</Typography>
                            <Typography variant='body2'>{product.description}</Typography>
                        </Box>

                    </Box>


                </Grid>

            </Grid>

        //</ShopLayout>

       
    )
}

export default ProductPage