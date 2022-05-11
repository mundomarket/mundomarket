import { Router } from "express";
import Product from "../models/Product"
const route= Router()



route.post('/createProduct', async (req:any, res:any) => {
   
const {name, price, description} = req.body
    try {
            const found = await Product.findOne({ name: req.body.name })

        if (found) {
            //ver...  ¿un usuario no puede volver a publicar un producto con el mismo precio?
            res.send('You cant post the same product twice')
        }
        else {

            const newProduct = new Product({
                name:name, 
                price:price, 
                description: description,
                 user: req.user.id});

            await newProduct.save()
            console.log("add product")
            return res.send('Product created')
        }

    } catch (err) {
        res.send(err)
    }
})





export default route