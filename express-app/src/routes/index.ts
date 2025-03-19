
import { Router } from "express";
import loginRouter from './login';
import perfilRouter from './perfil';

const routes: Router = Router();

routes.use("/login", loginRouter);
routes.use("/perfil", perfilRouter);

export default routes;