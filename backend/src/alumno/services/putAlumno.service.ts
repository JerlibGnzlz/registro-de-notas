import { IAlumno } from "../../interfaces/IAlumno";
import { Alumno } from "../../models";

export const ServicesActualizarAlumno = async (id: string, datosActualizados: Partial<IAlumno>) => {
    try {
        const alumno = await Alumno.findByPk(id);

        if (!alumno) {
            return {
                statusCode: 404,
                message: "No se encontró el alumno.",
                data: null,
            };
        }

        await alumno.update(datosActualizados);

        return {
            statusCode: 200,
            message: "Alumno actualizado correctamente",
            data: alumno
        };
    } catch (error) {
        console.error("Error al actualizar alumno:", error);

        return {
            statusCode: 500,
            message: error instanceof Error ? error.message : "Error interno del servidor",
        };
    }
};
