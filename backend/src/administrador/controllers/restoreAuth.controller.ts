import { Request, Response } from "express";
import { restoreAdmin } from "../services/restoreAuth.service";

export const restoreDelete = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const result = await restoreAdmin(id);

        res.status(result.statusCode).json(result);
    } catch (error) {
        res.status(500).json({ error: "Error al reactivar el Administrador" });
    }
};