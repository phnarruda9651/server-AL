import { createUser } from "../repository/user.repository";
import { Request, Response } from "express";

export const create = async(req: Request, res: Response)=> {
    try {
        const user = await createUser(req.body)
        res.status(200).send(user);
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
}