import bcrypt from 'bcrypt';
import {userValidation} from '../validations/user.validation'
import { createUser,getAll } from "../repository/user.repository";
import { Request, Response } from "express";

export const create = async(req: Request, res: Response)=> {
    try {

        await userValidation.validate(req.body)

        const hashPassword = await bcrypt.hash(req.body.password, 10)
        req.body.password = hashPassword
        const user = await createUser(req.body)
        res.status(200).send(user);
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
}

export const get = async(req:Request, res:Response)=> {
    try {
        const users = await getAll();
        res.status(200).send(users)
    } catch (error) {
        res.status(400).send(error);
    }
}