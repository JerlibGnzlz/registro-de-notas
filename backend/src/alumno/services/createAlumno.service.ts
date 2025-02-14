import { IAlumno } from "../../interfaces/IAlumno";
import { Alumno } from "../../models";

export const AlumnoRegister = async (alumno: IAlumno) => {
    if (!alumno.name || !alumno.email || !alumno.dni || !alumno.fecha_nacimiento || !alumno.administradorId) {
        return {
            message: "Todos los campos (name, email, dni, fecha_nacimiento, administradorId) son requeridos",
            statusCode: 400,
        };
    }

    try {
        const existAlumno = await Alumno.findOne({
            where: { email: alumno.email },
            paranoid: false,
        });

        if (existAlumno) {
            return {
                message: "El alumno ya existe",
                statusCode: 409,
                data: existAlumno,
            };
        }

        const newAlumno = await Alumno.create({
            name: alumno.name,
            email: alumno.email,
            dni: alumno.dni,
            fecha_nacimiento: alumno.fecha_nacimiento,
            administradorId: alumno.administradorId,
        });

        return {
            message: "Alumno registrado exitosamente",
            statusCode: 201,
            data: newAlumno,
        };
    } catch (error) {
        console.error("Error en AlumnoRegister:", error);

        return {
            message: "Error al registrar el Alumno",
            statusCode: 500,
        };
    }
};
