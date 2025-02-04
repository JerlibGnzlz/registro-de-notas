import { Alumno, Notas, Administrador } from '../../models';



export const NotasRegister = async (
    materia: string,
    calificacion: number,
    alumnoId: string,
    administradorId: string
) => {

    try {
        const existNota = await Notas.findOne({
            where: { materia, alumnoId, administradorId },
            include: [
                { model: Alumno },
                { model: Administrador }
            ]
        });
        console.log(existNota)

        if (existNota) {
            return { message: 'La nota ya existe', statuscode: 201 };
        }

        const newNota = await Notas.create({
            materia,
            calificacion,
            alumnoId,
            administradorId
        });

        if (newNota) {
            return { message: 'Nota creada', statuscode: 200, data: newNota };
        }

    } catch (error) {
        if (error instanceof Error) {
            return { message: error.message, statuscode: 400 };
        }
    }

    return { message: 'Error interno del servidor', statuscode: 500 };
};
