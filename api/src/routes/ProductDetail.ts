import {Router} from "express";
import Product from "../models/Product"
const route:Router=Router()



route.get("/:id", async (req, res) => {
    let id:string=req.params.id;
    try {
        let resultado:any[]|null=await Product.findById(id)
        res.send(resultado? resultado : "No se encuentra el producto" )
    } catch (error) {
        res.send({error: "No se encuentra el producto"})
    }
 
});




export default route