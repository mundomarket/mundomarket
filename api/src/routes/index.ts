import {Router} from "express";

import user from "./Users";
import product from "./Products";
import category from "./Categories";
import productCart from "./ProductCart";
import order from './Orders';


const route=Router() ;

route.use("/users", user) //CRUD de usuario - ADMIN lee y borra => implementar ban y permaban?
route.use("/products", product) //CRUD - User y Admin
route.use("/categories",category) // CRUD - Admin
route.use("/products-cart", productCart) // CRUD - User y Admin
route.use("/orders", order) 





export default route