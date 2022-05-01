// import {Router} from "express";
// import Product from "../models/Product"
// const route=Router()

// route.delete("/:id", async (req:any, res:any, next:any)=>{
//    try {
//        const id = req.query.id
//        if(id){
//            await Product.findByIdAndDelete(id)
//        return res.send("remove")
//        }
//        res.send("no")

//    } catch (error) {
//        next(error)
//    }
// });

// export default route