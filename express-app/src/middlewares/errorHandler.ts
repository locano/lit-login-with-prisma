import { ErrorRequestHandler, NextFunction, Request, Response } from "express";


const catchAllErrors = (err: ErrorRequestHandler, req: Request, res: Response) => {
  if (err) {
    console.error(err);
    console.log("catchAllErrors: ", err);
    res.sendStatus(500);
  }


  res.status(500).json({ error: 'Ocurrio un error inesperado' });
};

const send404 = (req: Request, res: Response, next: NextFunction) => {
  res.sendStatus(404);
};


export default {catchAllErrors, send404};

