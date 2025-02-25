import { Alumno } from "../../models";

export const ServicesAlumno = async (id: string) => {
    try {
        const alumno = await Alumno.findByPk(id);

        if (alumno) {
            return {
                statusCode: 200,
                message: "Alumno encontrado",
                data: alumno,
            };
        }

        return {
            statusCode: 404,
            message: "No se encontró el alumno.",
            data: null,
        };
    } catch (error) {
        console.error("Error al obtener alumno:", error);

        return {
            statusCode: 500,
            message: error instanceof Error ? error.message : "Error interno del servidor",
            data: null,
        };
    }
};