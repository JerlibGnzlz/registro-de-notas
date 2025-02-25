import { Router } from 'express';
import { register } from "./controllers/alumno.controllers";
import { allAlumnos } from "./controllers/getAllAlumno.controllers";
import { getAlumno } from "./controllers/getAlumno.controllers";
import { deleteAlumno } from './controllers/deleteAlumno.controllers';
import { putAlumno } from './controllers/putAlumno.controllers';


export const alumnoRoutes = Router()


alumnoRoutes.post("/register", register);

alumnoRoutes.get("/all", allAlumnos);

alumnoRoutes.route("/:id")
    .get(getAlumno)
    .put(putAlumno)
    .delete(deleteAlumno)









