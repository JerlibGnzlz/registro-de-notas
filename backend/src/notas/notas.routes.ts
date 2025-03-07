import { Router } from "express";
import { register } from "./controllers/notas.controllers";
import { allNotas } from "./controllers/getAllNotas.controllers";
import { getNota } from "./controllers/getNota.controllers";


export const notaRoutes = Router()


notaRoutes.post("/register", register);

notaRoutes.get("/all", allNotas);

notaRoutes.route("/:id")
    .get(getNota)
// .put(putNota)
// .delete(deleteNota)


