import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const getUserData = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {

        // get user info from token 
        console.log(
            "Headers1: ",
            req.headers.authorization as string
        );

        const user = JSON.parse(JSON.stringify(req.headers.authorization));
        console.log("            User: ", user);

        let email = user.username;
        let password = user.password;

        if (!prisma) {
            res.send({
                message: "Database is not connected",
                token: null,
            });
            return
        }

        const users = await prisma.users.findMany({
            where: {
                email: email,
                password: password
            }
        })

        if (users.length === 0) {
            res.send({
                message: "Username not found",
                token: null,
            });
            return;
        }




        res.send({
            message: "User data",
            data: users[0],
        });

    } catch (error) {
        next(error);
    }
}