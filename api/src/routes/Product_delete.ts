
import { Router } from "express";
import Product from "../models/Product"
const route= Router()


route.get("/delet/:id", async (req:any, res:any, next:any)=>{
    //console.log(req.user.id)
    
    try {
        const id = req.params.id


            const product = await Product.findById(id)
            if(!product.user.equals(req.user.id)){
                throw new Error('not found product')
            }
            await product.remove()
            return res.send("remove product")
    } catch (error:any) {
        console.log({ error: error.message})
    }
 });
       

//falta upDate

export default route