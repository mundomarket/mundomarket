import { Request, Response } from 'express';
import User from '../models/User';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';
import config from '../config';
import Role from '../models/Role';


const encryptPassword = async (password: string) => {
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(password, salt);
}


const comparePasswords = async (savedPassword: string, receivedPassword: string) => {
    return await bcrypt.compare(savedPassword, receivedPassword)
}




export const signUp = async (req: Request, res: Response) => {
    const { name, email, password, avatar, country, city, adress, phone, cuil } = req.body;

    const found = await User.find({ email });

    if (found.length > 0) {
        res.send('There is an account already created with this email')
    } else {
        // no olvidar verficar el mail antes de guardar!
        // comprobar CUIL en el front? ver función 
        const newUser = new User({ name, email, password: await encryptPassword(password), avatar, country, city, adress, phone, cuil });

        // if(roles){ 
        //    const foundRoles = await Role.find({ name : {$in: roles}});
        //    newUser.roles = foundRoles.map(role => role._id)         
        // } else {

        //le agrega el rol 'User' de manera predet. Solo el dev crea admin/s. 
        const role = await Role.findOne({ name: 'user' });
        newUser.roles = [role._id]
        // }


        await newUser.save();

        // const token = jwt.sign({ id: newUser._id }, config.SECRET_JWT, { expiresIn: 86400 /*24hs*/ })
        // no creo token para esperar la confirmación del mail y luego logeo manual


        // lo mando para que el Front lo capte y guarde
        // https://rajaraodv.medium.com/securing-react-redux-apps-with-jwt-tokens-fcfe81356ea0
        res.json({ user: newUser.name})


    }

}



export const logIn = async (req: Request, res: Response) => {

    const { email, password } = req.body;

    const found = await User.findOne({ email }).populate('roles')

    if (!found) return res.status(400).json({ message: 'Incorrect mail' });

    // ban => ver modelo User
    if(found.suspendedAccount) return res.status(401).json({ message: 'Your account it´s temporary suspended.' })

    const matchPassword = await comparePasswords(password, found.password);

    if (!matchPassword) return res.status(401).json({ message: 'Incorrect password' })

    const token = jwt.sign({ id: found._id }, config.SECRET_JWT, { expiresIn: 86400 })

    // lo mando para que el Front lo capte y guarde, cookies, localStorage, reducer, donde sea más cómodo
    // https://rajaraodv.medium.com/securing-react-redux-apps-with-jwt-tokens-fcfe81356ea0
    res.json({ user : found.name, token });
}