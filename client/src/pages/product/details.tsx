//import { ShopLayout } from '../../components/layouts/ShopLayout';
import { Grid, Box , Typography, Button, Chip} from '@mui/material';
import { CartContext } from '../../components/cart/CartContext';
import { initialData } from '../../database/products';
import { ProductSlideshow } from '../../components/products';
import { ItemCounter } from '../../components/ui';
import NavBar from '../../components/ui/NavBar/NavBar'
import {useNavigate, useParams} from "react-router-dom"

import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect, useContext } from "react";
import { AppDispatch,RootState } from '../../store/index';
import {GETDETAIL,GETRECOMMENDED} from '../../actions'
import { TypedUseSelectorHook } from "react-redux";
import SellerDetail from './sellerDetail'
import Recommended from './Recommended'
import { IProduct } from '../../components/products/productInterface';

import { ICartProduct } from '../../components/cart/cartInterface';

const useAppDispatch = () => useDispatch<AppDispatch>();

interface Props{
    product: IProduct
}



//const product =  initialData.products[0];

const ProductPage = () => {



  
    const navegar=useNavigate()
    const {id} = useParams()
    
    const dispatch=useAppDispatch()

    useEffect(()=>{
      dispatch(GETDETAIL(id))
    },[dispatch,id])

    //const products = useSelector((State) => State.products);
    const product=useSelector((State:RootState) => State.rootReducer.detail); 

    useEffect(()=>{
        dispatch(GETRECOMMENDED(product.category))
      },[product,dispatch])




      

     // const router = useRouter();
      const { addProductToCart } = useContext( CartContext )
   
      const [tempCartProduct, setTempCartProduct] = useState<ICartProduct>({
       _id: product._id,
       imageProduct: product.imageProduct,
       price: product.price,
       name: product.name,
       category: product.category,
       quantity: 1,
       envio: product.envio,
       rating: product.rating,
       review: product.review,
       description: product.description,
       stock: product.stock
     })
   
     const onUpdateQuantity = ( quantity: number ) => {
       setTempCartProduct( currentProduct => ({
         ...currentProduct,
         quantity
       }));
     }
   
   
     const onAddProduct = () => {  

      //if(!tempCartProduct._id){return}
      //setTempCartProduct( product);


       addProductToCart(tempCartProduct);



      // router.push('/cart');
      //navegar("/cart")//se accede al carrito
      //window.location.reload();//se refresca para activar el dispatch de GETPRODUCTS()
     }
  





    
    return (
        
        <>
            <NavBar/>

        <Box sx={{display:'flex',flexDirection:'column',alignItems:'center'}}>
            <Grid container spacing={8} mt={3} justifyContent={'space-evenly'}>

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
                        <Typography variant='subtitle2'>En Stock: </Typography>
                        <Typography variant='subtitle2'>{product.stock} </Typography>

              {

                        <Box sx={{my:2,display:'flex',alignItems:'center',justifyContent:'center'}}>
                            <Typography variant='subtitle2'>Cantidad </Typography>
                            <ItemCounter 
                              currentValue={ tempCartProduct.quantity }
                              maxValue={ product.stock }
                              updatedQuantity={ (value)=>onUpdateQuantity(value)  } 
                            />


                        </Box>

                        

              }

                        {
                          (product.stock > 0)
                          ? (
                              <Button 
                                color="secondary" 
                                className='circular-btn'
                                onClick={ onAddProduct }
                              >
                                {

                                    'Agregar al carrito'

                                }
                              </Button>
                          )
                          : (
                            <Chip label="No hay disponibles" color="error" variant='outlined' />
                          )
                        }

                         

                        <Box sx={{mt:3}}>
                        
                            <Typography variant='subtitle2'>Descripción:</Typography>
                            
                            <Typography variant='body2'>{product.description}</Typography>
                            <SellerDetail/>
                        </Box>

                    </Box>

                                   
                </Grid>
                
            </Grid>
            <Recommended/> 
        </Box>
      

    </>
    )
}

export default ProductPage
