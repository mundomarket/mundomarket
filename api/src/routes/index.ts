import {Router} from "express";
import users from'./User'

import product from "./Products";
import productCart from "./ProductCart";
import category from "./Categories";
import user from "./User";
import productdetail from "./Product_detail";
import auth from './Auth';
import productDelete from "./Product_delete";

const route=Router()

route.use('/auth', auth) //creación de usuario e inicio de sesión => solo se crean Users, los Admins son creados por el Dev
route.use("/users", user) //CRUD de usuario - ADMIN LEE Y BORRA => implementar ban y permaban? seee
route.use("/products", product)
route.use("/products-cart", productCart) 
route.use("/categories",category) //admin
route.use("/products",productdetail) //todos
route.use("/delete",productDelete) //admin o usuario registrado


export default route