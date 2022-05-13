import {Router} from "express";
import user from'./User'
import login from "./Login";
import product from "./Products";
import productCart from "./ProductCart";
import categories from "./Categories";
import token from "./Token";
import forgot from './Forgot'
//import productDelete from "./ProductDelete";
const route=Router();




route.use('/user',user) 
//ruta de registro

route.use('/login', login) 
//ruta de login/logout


route.use("/password",forgot)
//ruta forgot/reset password

route.use('/products', product)
//ruta de productos

route.use('/products-cart', productCart)
//ruta producto cart

route.use('/categories',categories)
//ruta de categorias

route.use('/token', token)
//ruta de token




export default route