import { Administrador } from "../../models";

export const restoreAdmin = async (id: string) => {
    try {
        const admin = await Administrador.findOne({
            where: { id },
            paranoid: false,
        });

        if (!admin) {
            return {
                message: "Administrador no encontrado",
                statusCode: 404,
            };
        }

        if (admin.deletedAt === null) {
            return {
                message: "El administrador ya está activo",
                statusCode: 400,
            };
        }

        await admin.restore();

        return {
            message: "Administrador reactivado exitosamente",
            statusCode: 200,
            data: admin,
        };
    } catch (error) {
        return {
            message: error instanceof Error ? error.message : "Error desconocido",
            statusCode: 500,
        };
    }
};