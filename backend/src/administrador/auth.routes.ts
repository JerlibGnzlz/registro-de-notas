import { Router } from "express";
import { register } from "./auth.controllers";


export const authRoutes = Router()


authRoutes.post("/register", register);



