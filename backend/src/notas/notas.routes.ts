import { Router } from "express";
import { register } from "./notas.controllers";


export const notaRoutes = Router()


notaRoutes.post("/register", register);



