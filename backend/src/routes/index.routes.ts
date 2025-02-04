import { Router } from "express";
import { authRoutes } from "../administrador/auth.routes";
import { alumnoRoutes } from "../alumno/alumno.routes";
import { notaRoutes } from "../notas/notas.routes";


export const indexRoutes = Router()


indexRoutes.use("/auth", authRoutes)

indexRoutes.use("/alumno", alumnoRoutes)

indexRoutes.use("/nota", notaRoutes)


