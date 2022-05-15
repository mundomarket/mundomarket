import { NextFunction, Request, Response, Router } from "express";
import Order from "../models/Order";
import Role from "../models/Role";
import { verifyToken, isAdmin } from "../controllers/authJwt";
import User from "../models/User";
const ObjectId = require('mongoose').Types.ObjectId; 
const route = Router()




route.get("/", verifyToken, async (req: Request, res: Response, next: NextFunction) => {
    try {

        const actualUser = await User.findById(req.userId);
        const roles = await Role.find({_id: {$in : actualUser.roles}});
        const allOrders = await Order.find().populate(['products', 'user']);    
        if(roles[0].name === 'user'){
            return res.send(allOrders)
        } else {
            const userOrders = allOrders.filter(order => order.user._id.toString() === actualUser._id.toString()); //el problema está como formulamos las relaciones entre las tablas        
            return res.send(userOrders)
        }

    } catch (error) {
        next(error)
    }
});


route.get("/:id", verifyToken,  async(req:any, res:any) => {
    const { id } = req.params
    try {
        const found:any[]|null=await Order.findById(id).populate({path: 'user', model : 'User'})
        res.send(found? found : "Order not found" )
    } catch (error) {
        res.send({error: "Order not found"})
    }
 
});




route.post('/', verifyToken, async (req: Request, res: Response, next: NextFunction) => {
    try {
    // req.userId => id del usuario logueado actualmente, se puede usar para ubicarlo rápidamente
    //const {  } = req.body

    // cuando agregue productos al Cart, debo pushearlos!(?)
    // https://stackoverflow.com/questions/29078753/how-to-reference-another-schema-in-my-mongoose-schema/29079951
        const newCategory = new Order({name});
        await newCategory.save();
        return res.send(`New category ${newCategory.name} created!`)
        
    } catch (err) {
        next(err)
    }
});


route.delete('/:id', [verifyToken, isAdmin], async (req: Request, res: Response, next: NextFunction) => {

    try {
        const { id } = req.params;
        const found = await Order.findByIdAndRemove({_id: id })
        res.json({ message: `Order : ${found.name} successfully deleted` })
    } catch (err) {
        next(err)
    }
});

export default route;