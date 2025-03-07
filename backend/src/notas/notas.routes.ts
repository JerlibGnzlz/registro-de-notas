import { Router } from "express";
import { register } from "./controllers/notas.controllers";
import { allNotas } from "./controllers/getAllNotas.controllers";


export const notaRoutes = Router()


notaRoutes.post("/register", register);

notaRoutes.get("/all", allNotas);



