import { Request, Response } from "express";
import { ServicesAlumnos } from "../services/getAllAlumno.service";

export const allAlumnos = async (_req: Request, res: Response): Promise<void> => {
    try {
        const { statusCode, message, data } = await ServicesAlumnos();

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
