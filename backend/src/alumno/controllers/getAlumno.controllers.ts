import { Request, Response } from "express";
import { ServicesAlumno } from "../services/getAlumno.service";

export const getAlumno = async (req: Request, res: Response): Promise<any> => {
    try {
        const { id } = req.params;

        const { statusCode, message, data } = await ServicesAlumno(id);

        if (statusCode === 404) {
            return res.status(404).json({
                message,
            });
        }

        return res.status(statusCode).json({
            message,
            data,
        });
    } catch (error) {
        console.error("Error al obtener el alumno:", error);

        return res.status(500).json({
            message: "Error interno del servidor",
        });
    }
};