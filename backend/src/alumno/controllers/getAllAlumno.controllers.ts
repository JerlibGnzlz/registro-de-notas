import { Request, Response } from "express";
import { ServicesAlumnos } from "../services/getAllAlumno.service";

export const allAlumnos = async (_req: Request, res: Response): Promise<any> => {
    try {
        const { statusCode, message, data } = await ServicesAlumnos();

        return res.status(statusCode).json({
            message,
            data,
        });
    } catch (error) {
        console.error("Error al obtener los alumnos:", error);

        return res.status(500).json({
            message: "Error interno del servidor",
        });
    }
};
