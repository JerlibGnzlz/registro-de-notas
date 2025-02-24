import { Router } from "express";
import { authRoutes } from "../administrador/auth.routes";
import { notaRoutes } from "../notas/notas.routes";
import { authToken } from "../middlewares/AuthToken";
import { alumnoRoutes } from '../alumno/alumno.routes';


export const router = Router()


router.use("/auth", authRoutes)

router.use("/alumno", authToken, alumnoRoutes)

router.use("/nota", notaRoutes)





