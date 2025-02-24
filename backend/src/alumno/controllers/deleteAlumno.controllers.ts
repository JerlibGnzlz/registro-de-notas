import { Request, Response } from "express";
import { ServicesDeleteAlumno } from "../services/deleteAlumno.service";


export const deleteAlumno = async (req: Request, res: Response): Promise<any> => {
    try {
        const { id } = req.params;

        const { statusCode, message, data } = await ServicesDeleteAlumno(id);

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
