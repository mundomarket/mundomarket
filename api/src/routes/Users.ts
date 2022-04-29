import axios from "axios";
import {Router} from "express";
import User from "../models/User"

const route=Router()



route.get("/", async (req:any, res:any, next:any) => {
    try {
        const user:any = await User.find()
        res.json(user)
    } catch (error) {
        next(error)
    }
 
});


export default route