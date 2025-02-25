import { Request, Response } from "express";
import { IAlumno } from "../../interfaces/IAlumno";
import { ServicesActualizarAlumno } from "../services/putAlumno.service";

export const putAlumno = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const alumno = req.body as IAlumno;

        const { statusCode, message, data } = await ServicesActualizarAlumno(id, alumno);

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