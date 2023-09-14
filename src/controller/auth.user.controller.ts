import { compare } from "bcrypt";
import { Response, Request } from "express";
import { prisma } from "../services/prisma";
import { sign } from "jsonwebtoken";

export const auth = async (req: Request, res: Response) => {
  try {
    const {email, password} = req.body

    const user = await prisma.user.findUnique({
        where: {
            email: email
        }, 
        
    })
    if(!user) {
        return res.json({error: "User not found"});
    }

    const isValuePassword = await compare(password, user.password)

    if(!isValuePassword) {
        return res.json({error: "password invalid"})
    }

    const token = sign({id: user.id}, "secret", { expiresIn: "30d"})

    res.status(200)

    const {id} = user

    return res.json({user: {id, email}, token})

  } catch (error) {
    console.log(error)
    res.status(400).send(error)
}
}
