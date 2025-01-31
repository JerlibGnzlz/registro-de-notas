import { Request, Response } from "express";
import { IAdministrador } from "../interfaces/IAdministrador";
import { AuthRegister } from "./services/createAuth.service";

export const register = async (req: Request, res: Response) => {

    const { name, email, password } = req.body as IAdministrador

    try {
        const newUser = await AuthRegister(name, email, password);

        res.status(200).json(newUser)

    } catch (error) {
        res.status(500).json({ error: "Error al registrar Usuario" });
    }
};
