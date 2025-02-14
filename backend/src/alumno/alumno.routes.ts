import { Router } from "express";
import { register } from "./controllers/alumno.controllers";
import { controllerAlumnos } from "./controllers/getAllAlumno.controllers";


export const alumnoRoutes = Router()


alumnoRoutes.post("/register", register);

alumnoRoutes.get("/all", controllerAlumnos);




