import { Router } from "express";
import Product from "../models/Product"
const route= Router()


route.get("/product", async (req:any, res:any, next:any)=>{
    console.log("esto es product_get con sesion",req.user)
    try {
        const product  = await Product.find({user: req.user.id})
        return res.json(product)
    } catch (error) {
        next(error)
    }
 });
       

export default route