import { Request, Response } from "express";
import { ServicesActualizarNota } from "../services/putNota.service";
import { INotas } from "../../interfaces/INotas";

export const putNota = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const nota = req.body as INotas;

        const { statusCode, message, data } = await ServicesActualizarNota(id, nota);

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