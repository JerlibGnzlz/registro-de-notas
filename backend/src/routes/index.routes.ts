import { Router } from "express";
import { authRoutes } from "../administrador/auth.routes";
import { alumnoRoutes } from "../alumno/alumno.routes";
import { notaRoutes } from "../notas/notas.routes";
import { authToken } from "../middlewares/AuthToken";


export const indexRoutes = Router()


indexRoutes.use("/auth", authRoutes)

indexRoutes.use("/alumno", authToken, alumnoRoutes)

indexRoutes.use("/nota", notaRoutes)


