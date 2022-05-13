import {Router} from "express";
<<<<<<< HEAD
import user from'./User'
=======
import users from'./User'

//import auth
import register from './Register'  
import token_confirmed from './Token_confirm'
>>>>>>> 95149f54c4854bd13e4b93ca820f2b1478c4452e
import login from "./Login";


//import product
import products_all from "./Products_All"
import product_get from './Product_get'
import product_post from './Product_post'
import product_detail from './Product_detail'
import product_delete from './Product_delete'
import productCart from "./ProductCart";
import categories from "./Categories";
<<<<<<< HEAD
import token from "./Token";
import forgot from './Forgot'
//import productDelete from "./ProductDelete";
const route=Router();


=======
>>>>>>> 95149f54c4854bd13e4b93ca820f2b1478c4452e


<<<<<<< HEAD
route.use('/user',user) 
//ruta de registro

route.use('/login', login) 
//ruta de login/logout


route.use("/password",forgot)
//ruta forgot/reset password
=======
function loggedIn(req:any,res:any,next:any){
    if(req.user){
        next()
    } else {
        console.log("usuario sin loggearse")
        res.send("usuario sin loggearse")
    }
}

// all users
route.use('/users',users)                 //GET http://localhost:3000/user/list

//auth
route.use('/auth/register',register)                 //POST http://localhost:3000/auth/register/
route.use('/auth/tokenConfirmed', token_confirmed)   //GET http://localhost:3000/auth/tokenConfirmed/:tokenId
route.use('/auth/login', login)                      //POST http://localhost:3000/auth/login
//falta forgotpassword


//all products
route.use('/allProducts' ,products_all)  //GET http://localhost:3000/allProducts/list   trae los productos de TODOS los usuarios

//product user : RUTAS PROTEGIDAS
route.use('/product', loggedIn, product_get) // GET http://localhost:3000/product/product    trae los productos de CADA usuario.
route.use('/product', loggedIn, product_post)
route.use('/product', product_detail)
route.use('/product',loggedIn, product_delete )
//falta ruta para editar 
>>>>>>> 95149f54c4854bd13e4b93ca820f2b1478c4452e


route.use('/products-cart', productCart)
route.use('/categories',categories)


<<<<<<< HEAD


=======
>>>>>>> 95149f54c4854bd13e4b93ca820f2b1478c4452e
export default route