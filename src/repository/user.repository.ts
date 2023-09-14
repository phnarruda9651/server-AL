import {prisma} from '../services/prisma';

interface Iprops {
    email: string,
    username:string,
  
    password: string
}

export const createUser = async(data:Iprops)=> {
    const user = await prisma.user.create({
        data: {
            username: data.username,
            password: data.password,
            email: data.email
        },
        select: {
            id: true,
            email: true,
            password: false,
            username: true
        }
    })
    return user;
}


export const getAll = async () => {
    const users = await prisma.user.findMany({
        select: {
            id: true,
            email: true,
            password: false,
            username: true
        }
    });
    return users
}

export const getById = async( id:number )=> {
    const user = await prisma.user.findUnique({
        where:{
            id: id
        },
        select: {
            id: true,
            email: true,
            password: false,
            username: true
        }
    })
    return user
}