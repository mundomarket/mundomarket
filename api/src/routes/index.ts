import {Router} from "express";
import user from'./User'


import token from "./Token";


//import auth
import register from './Register'
import confirmedAccount from './ConfirmedAccount'
import login from "./Login";


//import product
import products_all from "./Products_All"
import product_get from './Product_get'
import product_post from './Product_post'
import product_detail from './Product_detail'
import product_delete from './Product_delete'

import productCart from "./ProductCart";
import categories from "./Categories";

const route=Router() ;

function loggedIn(req:any,res:any,next:any){
    if(req.user){
        next()
    } else {
        
        console.log("usuario sin loggearse")
        res.send("usuario sin loggearse")
    }
}

route.use('/user',user) 

//auth
route.use('/register',register)
route.use('/confirmed-account', confirmedAccount)
route.use('/login', login) 

//all products
route.use('/products' ,products_all)

//product user
route.use('/product',loggedIn , product_get)
route.use('/product', loggedIn , product_post)
route.use('/product', product_detail)
route.use('/product',loggedIn, product_delete )
//falta ruta para editar 



route.use('/products-cart', productCart)
//ruta producto cart

route.use('/categories',categories)
//ruta de categorias

route.use('/token', token)
//ruta de token



//route.use('/fogotPassword', forgot)
export default route