import { Request, Router, Response } from 'express';
import { isAuth } from '../middlewares/isAuth';
import { getUserData } from '../controllers/perfil';
const router = Router();

router.get('/', isAuth, getUserData);

export default router;
