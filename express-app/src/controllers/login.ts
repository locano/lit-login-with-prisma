import { Request, Response, NextFunction } from 'express';
import { GENERATE_TOKEN } from '../middlewares/isAuth';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const loginUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {


    let email = req.body.email;
    let password = req.body.password;


    if (!email || !password) {
      res.send({
        message: "Email and Password are required",
        token: null,
      });
      return;
    }

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
        message: "Email or Password is incorrect",
        token: null,
      });
      return;
    }

    let token = GENERATE_TOKEN(email, password);
    res.send({
      message: "Login Successful",
      token: token,
    });

  } catch (error) {
    next(error);
  }
}