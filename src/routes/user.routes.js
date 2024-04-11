import { Router } from "express";
import { createUser } from "../controllers/user.controller.js";
import { isAdmin, verifyToken } from "../middlewares/authJwt.js";
import { rolesChecker } from "../middlewares/signUpVerify.js";
const router = Router();

router.post('/',verifyToken, isAdmin, rolesChecker, createUser)

export default router;