import { Request, Response } from 'express';
import User from '../models/User';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';
import config from '../config';
import Role from '../models/Role';


const encryptPassword = async (password : string) => {
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(password, salt);
}


const comparePasswords = async (savedPassword : string, receivedPassword : string) => {
    return await bcrypt.compare(savedPassword, receivedPassword)
}




export const signUp = async (req: Request, res: Response) => {
    const { name, email, password, avatar, country, city, adress, phone, cuil, roles } = req.body;
    
    const found = await User.find({email});

    if (found.length > 0) {
        res.send('There is an account already created with this email')
    } else {
        const newUser = new User({ name, email, password : await encryptPassword(password), avatar, country, city, adress, phone, cuil });

        if(roles){ //lo ideal sería que el admin se cree desde la DB, y los usuarios creados desde la App sean role:user por defecto
           const foundRoles = await Role.find({ name : {$in: roles}});
           newUser.roles = foundRoles.map(role => role._id)         
        } else {
            //si no le paso roles, me asigna User. De todas formas hay que ponerlo como default y el admin crearlo manualmente
            const role = await Role.findOne({name : 'user'});
            newUser.roles = [role._id]
        }
        await newUser.save();

        const token = jwt.sign({id: newUser._id}, config.SECRET_JWT, { expiresIn : 86400 /*24hs*/ })
        res.send({token})
    
    }

}



export const signIn = async (req: Request, res: Response) => {
    
    const { email, password } = req.body;

    const found = await User.findOne({email}).populate('roles')
 
    if(!found) return res.status(400).json({message : 'User not found'});

    const matchPassword = await comparePasswords(password, found.password);

    if(!matchPassword) return res.status(401).json({message : 'Incorrect password'})
    
    const token = jwt.sign({id: found._id}, config.SECRET_JWT, {expiresIn : 86400})

    console.log(found);

    res.json({token})














}