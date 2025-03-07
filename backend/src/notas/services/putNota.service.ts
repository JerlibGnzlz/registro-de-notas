import { INotas } from "../../interfaces/INotas";
import { Notas } from "../../models";

export const ServicesActualizarNota = async (id: string, datosActualizados: Partial<INotas>) => {
    try {
        const nota = await Notas.findByPk(id);

        if (!nota) {
            return {
                statusCode: 404,
                message: "No se encontró la nota.",
            };
        }

        await nota.update(datosActualizados);

        return {
            statusCode: 200,
            message: "Nota actualizada correctamente",
            data: nota
        };
    } catch (error) {
        console.error("Error al actualizar la nota:", error);

        return {
            statusCode: 500,
            message: error instanceof Error ? error.message : "Error interno del servidor",
        };
    }
};
