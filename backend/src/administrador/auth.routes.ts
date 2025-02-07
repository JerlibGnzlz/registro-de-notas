import { Router } from "express";
import { register } from "./controllers/createAuth.controllers";
import { softDelete } from "./controllers/deleteAuth.controllers";
import { restoreDelete } from "./controllers/restoreAuth.controller";


export const authRoutes = Router()


authRoutes.post("/register", register);

authRoutes.delete("/softDelete/:id", softDelete);

authRoutes.put("/restore/:id", restoreDelete);


