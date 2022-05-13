import { NextFunction, Request, Response, Router } from "express";
import User from "../models/User"
import { isAdmin, verifyToken } from "../controllers/authJwt";

const route = Router()


// Leer a todos los usuarios => Admin
route.get("/", [verifyToken, isAdmin], async (req: any, res: any, next: any) => {
    try {
        const users: any = await User.find()
        res.json(users)
    } catch (error) {
        next(error)
    }

});


route.get("/:id", verifyToken,  async(req:any, res:any) => {
    const { id }= req.param;
    try {
        const found:any[]|null=await User.findById(id)
        res.send(found? found : "User not found" )
    } catch (error) {
        res.send({error: "User not found"})
    }
 
});

// POST => Ver Auth.ts. Solo se crean Users, solo Dev crea Admins

route.delete('/:id', [verifyToken, isAdmin], async (req: Request, res: Response, next: NextFunction) => {

    // el ban se logra quitando acceso temporal a la cuenta, habría que hacer una copia en otro esquema inaccesible, cosa de guardar los datos
    // front pregunta si confirma x acción

    // esto es permaban, ojo
    try {
        const { id } = req.params;
        const found = await User.findByIdAndRemove({_id: id})
        res.json({ message: `User : ${found.name} - ID : ${found._id} successfully deleted` })
    } catch (err) {
        next(err)
    }
});

route.put('/:id', verifyToken, async (req: Request, res: Response, next: NextFunction) => {

    try {
        const { id } = req.params;
        await User.findByIdAndUpdate({_id: id}, req.body);
        const updatedUser = await User.findById({_id: id})
        res.send(updatedUser)
    } catch(err){
        next(err)
    }

});

export default route