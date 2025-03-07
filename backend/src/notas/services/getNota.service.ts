import { Notas } from "../../models";

export const ServicesNota = async (id: string) => {
    try {
        const nota = await Notas.findByPk(id);

        if (nota) {
            return {
                statusCode: 200,
                message: "Nota encontrada",
                data: nota,
            };
        }

        return {
            statusCode: 404,
            message: "No se encontró la nota.",
        };
    } catch (error) {
        console.error("Error al obtener la nota:", error);

        return {
            statusCode: 500,
            message: error instanceof Error ? error.message : "Error interno del servidor",
        };
    }
};