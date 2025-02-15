
import { Request, Response } from "express";
import { IAdministrador } from "../../interfaces/IAdministrador";
import { AuthLogin } from "../services/loginAuth.service";

export const login = async (req: Request, res: Response) => {
    const admin = req.body as IAdministrador;

    try {
        const { statusCode, message, data, token } = await AuthLogin(admin);

        res.cookie("authCookie", token, {
            httpOnly: true,
            secure: process.env.COOKIE === "production",
            // maxAge: 24 * 60 * 60 * 1000,
            maxAge: 60 * 1000,
            signed: true,
        });

        res.status(statusCode).json({
            message,
            data,
            token,
        });

    } catch (error) {
        console.error("Error en el controlador login:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
};
