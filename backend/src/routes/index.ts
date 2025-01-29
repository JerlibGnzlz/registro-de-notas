import { Router } from "express";
import { registerUser } from "./administrador.routes";

export const router = Router()


router.use(registerUser);

