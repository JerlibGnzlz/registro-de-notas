import { Router } from "express";
import { register } from "./alumno.controllers";


export const alumnoRoutes = Router()


alumnoRoutes.post("/register", register);



