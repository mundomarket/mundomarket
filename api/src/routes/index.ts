import {Router} from "express";

import product from "./Products";
import category from "./Categories";
import user from "./Users";
import productdetail from "./ProductDetail";
//import productDelete from "./ProductDelete";


const route=Router() ;//tipo de objeto Route


route.use("/users", user)
route.use("/products", product)
route.use("/categories",category)
route.use("/products",productdetail)
//route.use("/delete",productDelete)










export default route