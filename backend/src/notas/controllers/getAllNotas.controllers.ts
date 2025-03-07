import { Request, Response } from "express";
import { ServicesNotas } from "../services/getAllNotas.service";

export const allNotas = async (_req: Request, res: Response): Promise<void> => {
    try {
        const { statusCode, message, data } = await ServicesNotas();

        res.status(statusCode).json({
            message,
            data,
        });
    } catch (error) {
        console.error("Error al obtener los notas:", error);

        res.status(500).json({
            message: "Error interno del servidor",
        });
    }
};
