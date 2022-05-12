import { Router } from "express";
const router = Router();

import * as authCtrl from '../controllers/auth.controllers';


router.post('/signup', authCtrl.signUp)
router.post('/logIn', authCtrl.logIn)

export default router;