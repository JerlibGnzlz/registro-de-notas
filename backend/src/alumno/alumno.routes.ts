import { Router } from "express";
import { register } from "./controllers/alumno.controllers";
import { allAlumnos } from "./controllers/getAllAlumno.controllers";


export const alumnoRoutes = Router()


alumnoRoutes.post("/register", register);

alumnoRoutes.get("/all", allAlumnos);

// alumnoRoutes.get("/:id", getAlumno);

// alumnoRoutes.delete("/:id", deleteAlumno);

// alumnoRoutes.put("/:id", putAlumno);






