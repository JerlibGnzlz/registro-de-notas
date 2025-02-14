// import { Alumno, Administrador } from '../../models';

import { IAlumno } from "../../interfaces/IAlumno";


// export const AlumnoRegister = async (
//     name: string,
//     email: string,
//     dni: string,
//     fecha_nacimiento: string,
//     administradorId: string
// ) => {

//     try {
//         const existAlum = await Alumno.findOne({
//             where: { email, administradorId },
//             attributes: ["name"],
//             include: {
//                 model: Administrador, attributes: ["name"]
//             }
//         });

//         if (existAlum) {
//             return { message: 'El alumno ya existe', statuscode: 201, data: [existAlum] };
//         }

//         const newAlum = await Alumno.create({
//             name,
//             email,
//             dni,
//             fecha_nacimiento,
//             administradorId
//         });

//         if (newAlum) {
//             return { message: 'Alumno creado', statuscode: 200, data: newAlum };
//         }

//     } catch (error) {
//         if (error instanceof Error) {
//             return { message: error.message, statuscode: 400 };
//         }
//     }

//     return { message: 'Error interno del servidor', statuscode: 500 };
// };

// import { IAlumno } from "../../interfaces/IAlumno";

// import { IAlumno } from "../../interfaces/IAlumno";
import { Alumno } from "../../models";

export const AlumnoRegister = async (alumno: IAlumno) => {
    if (!alumno.name || !alumno.email || !alumno.dni || !alumno.fecha_nacimiento || !alumno.administradorId) {
        return {
            message: "Todos los campos (name, email, dni, fecha_nacimiento, administradorId) son requeridos",
            statusCode: 400,
        };
    }

    try {
        // Verificar si el alumno ya existe en la base de datos
        const existAlumno = await Alumno.findOne({
            where: { email: alumno.email },
            paranoid: false, // Incluye registros eliminados si los tienes configurados con paranoid
        });

        if (existAlumno) {
            return {
                message: "El alumno ya existe",
                statusCode: 409,
                data: existAlumno,
            };
        }

        // Crear un nuevo alumno en la base de datos
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
