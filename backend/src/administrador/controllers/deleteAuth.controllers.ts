import { Request, Response } from "express";
import { softDeleteServices } from "../services/deleteAuth.service";

export const softDelete = async (req: Request, res: Response) => {

    const { id } = req.params

    try {
        const deleteUser = await softDeleteServices(id);

        res.status(200).json(deleteUser)

    } catch (error) {
        res.status(500).json({ error: "Error al eliminar el Administrador" });
    }
};
