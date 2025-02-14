import { Alumno } from "../../models";

export const ServicesAlumnos = async () => {
    try {
        const alumnos = await Alumno.findAll();

        if (alumnos.length > 0) {
            return {
                statusCode: 200,
                message: "Alumnos encontrados",
                data: alumnos,
            };
        }

        return {
            statusCode: 404,
            message: "No se encontraron alumnos.",
        };
    } catch (error) {
        console.error("Error al obtener alumnos:", error);

        return {
            statusCode: 500,
            message: error instanceof Error ? error.message : "Error interno del servidor",
        };
    }
};
