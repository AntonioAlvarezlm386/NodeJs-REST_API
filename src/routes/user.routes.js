import { Router } from "express";
import { createUser } from "../controllers/user.controller.js";
import { isAdmin, verifyToken } from "../middlewares/authJwt.js";
import { dbDuplicate, rolesChecker } from "../middlewares/signUpVerify.js";
const router = Router();

router.post('/',verifyToken, isAdmin, dbDuplicate ,rolesChecker, createUser)

export default router;