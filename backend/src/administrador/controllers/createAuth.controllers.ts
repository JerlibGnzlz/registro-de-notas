import { Request, Response } from "express";
import { IAdministrador } from "../../interfaces/IAdministrador";
import { AuthRegister } from '../services/createAuth.service';

export const register = async (req: Request, res: Response) => {

    const admin = req.body as IAdministrador;


    try {

        const { statusCode, message, data } = await AuthRegister(admin);

        res.status(statusCode).json({
            message,
            data
        })

    } catch (error) {
        res.status(500).json({ error: "Error al registrar el Administrador" });
    }
};
