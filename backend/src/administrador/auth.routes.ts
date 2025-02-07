import { Router } from "express";
import { register } from "./controllers/createAuth.controllers";
import { softDelete } from "./controllers/deleteAuth.controllers";
import { restoreDelete } from "./controllers/restoreAuth.controller";
import { login } from "./controllers/loginAuth.controllers";
// import { authToken } from "../middlewares/AuthToken";


export const authRoutes = Router()


authRoutes.post("/register", register);

authRoutes.post("/login", login);

authRoutes.delete("/softDelete/:id", softDelete);

authRoutes.put("/restore/:id", restoreDelete);


