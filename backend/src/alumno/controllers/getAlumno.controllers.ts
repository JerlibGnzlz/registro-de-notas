import { Request, Response } from "express";
import { ServicesAlumno } from "../services/getAlumno.service";

export const getAlumno = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;

        const { statusCode, message, data } = await ServicesAlumno(id);

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
        console.error("Error al obtener el alumno:", error);

        res.status(500).json({
            message: "Error interno del servidor",
        });
    }
};