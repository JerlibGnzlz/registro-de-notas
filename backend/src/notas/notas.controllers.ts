import { Request, Response } from "express";
import { NotasRegister } from "./services/createNotas.service";
import { INotas } from "../interfaces/INotas";

export const register = async (req: Request, res: Response) => {

    const { materia, calificacion, alumnoId, administradorId } = req.body as INotas

    if (!materia || !calificacion || !alumnoId || !administradorId) {
        res.status(400).json({ error: "Todos los campos son requeridos" });
    }

    try {
        if (materia && calificacion && alumnoId && administradorId) {
            const newUser = await NotasRegister(materia, calificacion, alumnoId, administradorId);
            res.status(200).json(newUser);
        } else {
            res.status(400).json({ error: "Todos los campos son requeridos" });
        }

        // res.status(200).json({})

    } catch (error) {
        res.status(500).json({ error: "Error al registrar la nota" });
    }
};
