import {Router} from "express";
import Product from "../models/Product"
const route:Router=Router()



route.get("/", async (req, res,next) => {

    const {name, names, sort, filterName, filterOrder} = req.query
    
    if(name){
        //http://localhost:3000/products?name=buzo
        try {
            const productName: any[] = await Product.find({ name: {$regex: req.query.name, $options:'i'}})
            return productName.length === 0 ? res.json({"message" : "not found product"}) : res.json(productName)
            } catch (error) {
            next(error)
        }
    } 
    else if(names || sort || filterName || filterOrder) {
        try {
           //http://localhost:3000/products?filterName=name&filterOrder=buzo&names=stock&sort=1
            if (typeof(names) === 'string' && typeof(filterName) === 'string' ) {
                
                const objFilter: any = {}
                objFilter[filterName] = filterOrder

                const objOrder: any = {}
                objOrder[names] = sort
                
                const product = await Product.find(objFilter).sort(objOrder)
                res.json(product.length === 0? "not found product" : product)
            
            } else {
                res.send("not found product")
            }
           
        } catch (error) {
            next(error)
        }
    }else {
        
        try {
            //http://localhost:3000/products
            const allProduct  = await Product.find({})
            return res.json(allProduct)
        } catch (error) {
            next(error)
        }
    }
   
});

export default route