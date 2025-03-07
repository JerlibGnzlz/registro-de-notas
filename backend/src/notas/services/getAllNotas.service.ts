import { Notas } from "../../models";

export const ServicesNotas = async () => {
    try {
        const notas = await Notas.findAll();

        if (notas.length > 0) {
            return {
                statusCode: 200,
                message: "Notas encontradas",
                data: notas,
            };
        }

        return {
            statusCode: 404,
            message: "No se encontraron las Notas.",
        };
    } catch (error) {
        console.error("Error al obtener las notas:", error);

        return {
            statusCode: 500,
            message: error instanceof Error ? error.message : "Error interno del servidor",
        };
    }
};
