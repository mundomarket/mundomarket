import {Router} from "express";

import user from "./Users";
import * as authCtrl from '../controllers/auth.controllers';
import product from "./Products";
import category from "./Categories";
import productCart from "./ProductCart";
import order from './Orders';


const route=Router() ;

route.use("/users", user) //CRUD de usuario - ADMIN LEE Y BORRA => implementar ban y permaban?
route.use("/users/signup", authCtrl.signUp) // registro de usuario. Solo el Dev crea al Admin 
route.use("/users/login", authCtrl.logIn) //loggeo de Usuario y Admin registrado
route.use("/products", product)
route.use("/categories",category) // solo admin
route.use("/products-cart", productCart) 
route.use("/orders", order) 





export default route