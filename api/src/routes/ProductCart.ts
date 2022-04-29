import {Router} from "express";
import Cart from "../models/Cart"
import Product from "../models/Product"
const route:Router=Router();


route.get('/',async(req,res,next)=>{
    
    try {
        const allProducts = await Cart.find();
        allProducts.length > 0 ? res.send(allProducts) :
        res.send('There are no products in the Cart');    
    } catch(err) {
        next(err);
    }
});



route.post('/:id', async(req,res,next)=>{
    try{
        const {name, image, price} = req.body

        const productInDb = await Product.findOne({name})
        const productInCart = await Cart.findOne({name})

        !productInDb && res.send('This product it´s not available');
        productInCart && res.send('This product it´s already in the Cart')

        if(productInDb && !productInCart){
            const newProductOnCart = new Cart({name, image, price, amount : 1});

            await Product.findByIdAndUpdate(
                productInDb?._id,
                { inCart: true, name, image, price},
                { new : true }
            ).then((product)=> {
                newProductOnCart.save();
                res.send(product)
            }).catch(err => console.log(err))
        }

    } catch(err){
        next(err)
    }
});

// route.put('/:id', async(req,res,next)=>{
//     try{
//         const { id } = req.params;
//         const { query } = req.query;
//         const body = req.body;

//         const found = Cart.findById(id);

//         !query && res.send('Query required');

//         found && query === ''





//     }catch(err){
//         next(err)
//     }
// })


export default route;