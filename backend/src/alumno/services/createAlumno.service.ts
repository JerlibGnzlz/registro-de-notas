import { Alumno } from '../../models';


export const AlumnoRegister = async (name: string, email: string, dni: string, fecha_nacimiento: string) => {

    try {
        const existAlum = await Alumno.findOne({ where: { email } });

        if (existAlum) {
            return { message: 'El alumno ya existe', statuscode: 400, data: existAlum };
        }

        const newAlum = await Alumno.create({
            name,
            email,
            dni,
            fecha_nacimiento
        });

        if (newAlum) {
            return { message: 'Alumno creado', statuscode: 200, data: newAlum };
        }

    } catch (error) {
        if (error instanceof Error) {
            return { message: error.message, statuscode: 400 };
        }
    }

    return { message: 'Error interno del servidor', statuscode: 500 };
};
