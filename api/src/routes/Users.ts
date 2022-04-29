import axios from "axios";
import {Router} from "express";
import User from "../models/User"

const route:Router=Router()



route.get("/", async (req, res, next) => {
    try {
        const user:any = await User.find()
        res.json(user)
    } catch (error) {
        next(error)
    }
 
});


export default route