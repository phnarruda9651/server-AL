import bcrypt from 'bcrypt';
import {userValidation} from '../validations/user.validation'
import { createUser,getAll, getById } from "../repository/user.repository";
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

export const getId = async(req:Request, res:Response)=> {
    try {
        const userId = await getById(Number(req.params.id))
        res.status(200).send(userId);
    } catch (error) {
        res.status(400).send(error);
    }
}