import { Router } from 'express';
import { loginUser } from '../controllers/login';

const loginRouter: Router = Router();

loginRouter.post('/', loginUser);

export default loginRouter;
