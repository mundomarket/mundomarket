import { Router } from "express";
import Product from "../models/Product"
const route: Router = Router()



route.get("/", async (req, res) => {
    try{
        const infoDb=await Product.find()
        res.json(infoDb.length ? infoDb : "No hay productos para mostrar")
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