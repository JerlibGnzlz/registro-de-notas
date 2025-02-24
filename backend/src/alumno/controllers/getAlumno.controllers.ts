import { Request, Response } from "express";
import { ServicesAlumno } from "../services/getAlumno.service";

export const getAlumno = async (req: Request, res: Response): Promise<any> => {
    try {
        // Extraer el `id` de los parámetros de la solicitud
        const { id } = req.params;

        // Llamar al servicio pasando el `id`
        const { statusCode, message, data } = await ServicesAlumno(id);

        // Si no se encuentra el alumno, devolver un 404
        if (statusCode === 404) {
            return res.status(404).json({
                message,
            });
        }

        // Devolver el alumno encontrado
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