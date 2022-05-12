import {Router} from "express";
import Product from "../models/Product"
import { verifyToken, isAdmin } from "../controllers/authJwt";
const route=Router()

//Usuarios registrados pueden modificar sus productos
route.delete("/:id", verifyToken, async (req:any, res:any, next:any)=>{
   try {
       const id = req.query.id
       if(id){
       await Product.findByIdAndDelete(id)
       return res.send("Removed product")
       }
       res.send("Product ID needed")

   } catch (error) {
       next(error)
   }
});

export default route