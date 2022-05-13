import { NextFunction, Request, Response, Router } from "express";
import Order from "../models/Category"
import { verifyToken, isAdmin } from "../controllers/authJwt";
const route = Router()




route.get("/", verifyToken, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const orders: string[] = await Order.find();
        res.send(orders.length ? orders : "There are no orders in DB")
    } catch (error) {
        res.send({ error: "There are no orders in DB" })
    }
});


route.get("/:id", verifyToken,  async(req:any, res:any) => {
    const { id } = req.params
    try {
        const found:any[]|null=await Order.findById(id)
        res.send(found? found : "Order not found" )
    } catch (error) {
        res.send({error: "Order not found"})
    }
 
});




// route.post('/', [verifyToken, isAdmin], async (req: Request, res: Response, next: NextFunction) => {
//     try {
//         const { name } = req.body

//         const found = await Category.findOne({ name: { $regex: name, $options: 'i' } })

//         if (found) return res.send(`There is a category with a similar name : ${found.name}`)
       
//         const newCategory = new Order({name});
//         await newCategory.save();
//         return res.send(`New category ${newCategory.name} created!`)
        
//     } catch (err) {
//         next(err)
//     }
// });





















route.delete('/:id', [verifyToken, isAdmin], async (req: Request, res: Response, next: NextFunction) => {

    try {
        const { id } = req.params;
        const found = await Order.findByIdAndRemove({_id: id })
        res.json({ message: `Order : ${found.name} successfully deleted` })
    } catch (err) {
        next(err)
    }
});