import { Alumno } from "../../models";

export const ServicesDeleteAlumno = async (id: string) => {
    try {
        const alumno = await Alumno.destroy({
            where: { id },
        });

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
        };
    } catch (error) {
        console.error("Error al obtener alumno:", error);

        return {
            statusCode: 500,
            message: error instanceof Error ? error.message : "Error interno del servidor",
        };
    }
};