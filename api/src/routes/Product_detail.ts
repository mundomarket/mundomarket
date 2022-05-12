import { Router } from "express";
import Product from "../models/Product"
import { verifyToken } from "../controllers/authJwt";
const route=Router()



route.get("/:id", verifyToken,  async(req:any, res:any) => {
    let id:string=req.params.id;
    try {
        let resultado:any[]|null=await Product.findById(id)
        res.send(resultado? resultado : "No se encuentra el producto" )
    } catch (error) {
        res.send({error: "No se encuentra el producto"})
    }
 
});


export default route