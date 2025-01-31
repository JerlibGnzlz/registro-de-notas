import { Request, Response } from "express";
import { IAlumno } from "../interfaces/IAlumno";
import { AlumnoRegister } from "./services/createAlumno.service";

export const register = async (req: Request, res: Response) => {

    const { name, email, dni, fecha_nacimiento } = req.body as IAlumno

    if (!name || !email || !dni || !fecha_nacimiento) {
        res.status(400).json({ error: "Todos los campos son requeridos" });
    }

    try {
        const newUser = await AlumnoRegister(name, email, dni, fecha_nacimiento.toString());

        res.status(200).json(newUser)

    } catch (error) {
        res.status(500).json({ error: "Error al registrar el Alumno" });
    }
};
