import {Router} from "express";

import product from "./Products";
import productCart from "./ProductCart";
import category from "./Categories";
import user from "./Users";
import productdetail from "./ProductDetail";
import auth from './Auth';
import productDelete from "./ProductDelete";


const route=Router() ;//tipo de objeto Route

route.use('/auth', auth) //creación de usuario e inicio de sesión => solo se crean Users, los Admins son creados por el Dev
route.use("/users", user) //CRUD de usuario - ADMIN LEE Y BORRA => implementar ban y permaban? seee
route.use("/products", product)
route.use("/products-cart", productCart) 
route.use("/categories",category) //admin
route.use("/products",productdetail) //todos
route.use("/delete",productDelete) //admin o usuario registrado


export default route