import {Router} from "express";
import Category from "../models/Category"
const route:Router=Router()


route.get("/", async(req, res) => {
    try {
        let cats:object=await Category.find();
        res.send(cats)
    } catch (error) {
        res.send({error: "no hay categorias"})
    }
})




export default route