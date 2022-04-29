import {Router} from "express";
import Product from "../models/Product"
const route:Router=Router()

route.delete("/:id", async (req, res)=>{
    const productFound = await Product.findByIdAndDelete(req.params.id)
    if(!productFound) return res.status(204).json();
    return res.json(productFound)
});

export default route