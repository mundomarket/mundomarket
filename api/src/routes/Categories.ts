import {Router} from "express";
import Category from "../models/Category"
const route:Router=Router()


route.get("/", async(req, res) => {
    try {
        let cats:string[]=await Category.find();
        res.send(cats.length? cats : "No hay categorias")
    } catch (error) {
        res.send({error: "no hay categorias"})
    }
})




export default route