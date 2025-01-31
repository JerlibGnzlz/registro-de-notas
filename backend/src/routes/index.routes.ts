import { Router } from "express";
import { authRoutes } from "../administrador/auth.routes";
import { alumnoRoutes } from "../alumno/alumno.routes";


export const indexRoutes = Router()


indexRoutes.use("/auth", authRoutes)

indexRoutes.use("/alumno", alumnoRoutes)

