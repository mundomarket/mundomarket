import {FC} from 'react'
import {Grid} from '@mui/material'
import {IProduct} from '../../interfaces'
import  {ProductCard}  from './ProductCard';


interface Props{
    products: IProduct[];
}

export const ProductList: FC<Props>=({products})=>{


    return(
        products[0]?<Grid container spacing ={10} >
            {
                
                products.map(product =>(
                    <ProductCard
                        key={product._id}
                        product={product}
                    />
                ))

            }
        </Grid>:<div><h1>No hay productos para esta busqueda</h1></div>
    )
}