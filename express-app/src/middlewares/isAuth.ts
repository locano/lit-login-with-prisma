import { NextFunction, Request, Response } from "express";
import sendResponse from "../helpers/sendResponse";
import { ApiCodes } from "../helpers/apiCodes";
import jwt, { JsonWebTokenError } from "jsonwebtoken";


export const isAuth = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = (req.headers.authorization || "")?.split(" ")[1];

    if (!token) {
      sendResponse({
        code: ApiCodes.USER_NOT_VERIFIED,
        res,
        statusCode: 401,
      });
    }
    // Verificar el token usando tu JWT_SECRET
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET!);
    req.headers.authorization = decodedToken as string;
    next();
  } catch (error: unknown) {
    sendResponse({
      code: ApiCodes.INVALID_TOKEN,
      res,
      statusCode: 401,
    });
  }
};


export const GENERATE_TOKEN = (username: string, password: string) => {

  // Generar token con 1 año de expiración
  const token = jwt.sign(
    {
      username,
      password
    },               // Información a incluir en el token
    process.env.JWT_SECRET!,       // Clave secreta para firmar el token
    { expiresIn: "1 years" }    // Expiración infinita
  );
  return token;

};