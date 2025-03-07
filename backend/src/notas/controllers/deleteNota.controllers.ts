import { Request, Response } from "express";
import { ServicesDeleteNota } from "../services/deleteNota.service";


export const deleteNota = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;

        const { statusCode, message, data } = await ServicesDeleteNota(id);

        res.status(statusCode).json({
            message,
            data,
        });
    } catch (error) {
        console.error("Error al obtener los alumnos:", error);

        res.status(500).json({
            message: "Error interno del servidor",
        });
    }
};
