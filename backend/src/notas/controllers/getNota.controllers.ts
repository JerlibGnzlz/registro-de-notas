import { Request, Response } from "express";
import { ServicesNota } from "../services/getNota.service";

export const getNota = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;

        const { statusCode, message, data } = await ServicesNota(id);

        if (statusCode === 404) {
            res.status(404).json({
                message,
            });
        }

        res.status(statusCode).json({
            message,
            data,
        });
    } catch (error) {
        console.error("Error al obtener la nota:", error);

        res.status(500).json({
            message: "Error interno del servidor",
        });
    }
};