import { Router } from "express";
import Product from "../models/Product"
const route: Router = Router()




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

route.get("/", async (req, res) => {
    let {name}=req.query;
    try{
    if (name?.length) {// si me llega algo por query entonces hago el filtrado por name
        const regexp = new RegExp(`.*${name}.*`) //convirtiendo a expresion regular
        const infoDb=await Product.find({"name": regexp })
        res.json(infoDb.length ? infoDb : "No hay productos para mostrar")
    }else{
        const infoDb=await Product.find()
        res.json(infoDb.length ? infoDb : "No hay productos para mostrar")
    }
    }catch(e){
        console.log(e)
    }
    
});


route.post('/', async (req, res) => {

    try {        
            const found = await Product.findOne({ name: req.body.name })

        if (found) {
            res.send(301).json({ message: 'You can´t post the same product twice' })
        }
        else {

            const newProduct = new Product(req.body);
            console.log(newProduct)
            await newProduct.save()

        }
        
    } catch (err) {
        res.status(500).json({ message: err })
    }





})


             

export default route