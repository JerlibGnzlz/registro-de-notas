import { Request, Response } from "express";
import { IAdministrador } from "../../interfaces/IAdministrador";
import { AuthLogin } from "../services/loginAuth.service";

export const login = async (req: Request, res: Response) => {

    const admin = req.body as IAdministrador

    try {
        const administrador = await AuthLogin(admin);

        res.status(200).json([administrador])

    } catch (error) {
        res.status(500).json({ error: "Error al logear el Administrador" });
    }
};
