import { Request, Response } from "express";
import { AlumnoRegister } from "../services/createAlumno.service";
import { IAlumno } from "../../interfaces/IAlumno";

export const register = async (req: Request, res: Response): Promise<void> => {
    const alumno = req.body as IAlumno;

    try {
        const { statusCode, message, data } = await AlumnoRegister(alumno);
        res.status(statusCode).json({
            message,
            data,
        });
    } catch (error) {
        res.status(500).json({ message: "Error al registrar el Alumno" });
    }
};
