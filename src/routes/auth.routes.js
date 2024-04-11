import { Router } from "express";
import { signIn, signUp } from "../controllers/auth.controllers.js";
import { dbDuplicate } from "../middlewares/signUpVerify.js";
const router = Router();

router.post('/signin', signIn)
router.post('/signup',dbDuplicate, signUp)

export default router;