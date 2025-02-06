// import { Request, Response } from "express";
import { Administrador } from "../../models";

export const softDeleteServices = async (id: string) => {
    try {
        const admin = await Administrador.findByPk(id);

        if (!admin) {
            return {
                message: "Administrador no encontrado",
                statusCode: 404,
            };
        }

        await admin.destroy();

        return {
            message: "Administrador eliminado lógicamente",
            statusCode: 200,
        };
    } catch (error) {
        return {
            message: error instanceof Error ? error.message : "Error desconocido",
            statusCode: 500,
        };
    }
};
