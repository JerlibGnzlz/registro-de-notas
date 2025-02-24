import { Alumno } from "../../models";

export const ServicesAlumno = async (id: string) => {
    try {
        // Buscar el alumno por su ID
        const alumno = await Alumno.findByPk(id);

        if (alumno) {
            return {
                statusCode: 200,
                message: "Alumno encontrado",
                data: alumno,
            };
        }

        // Si no se encuentra el alumno
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