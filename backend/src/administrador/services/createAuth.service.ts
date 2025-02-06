import { passwordHashado } from '../../helpers/bycript';
import { Administrador } from '../../models';


export const AuthRegister = async (name: string, email: string, password: string) => {

    try {
        const existAdmin = await Administrador.findOne(
            {
                where: { email },
                paranoid: false
            });

        // if (existAdmin) {
        //     return { message: 'El administrador ya existe', statuscode: 400, data: existAdmin };
        // }

        if (existAdmin) {

            if (existAdmin.deletedAt) {
                await existAdmin.restore(); // Restaura el registro eliminado
                return {
                    message: 'Administrador restaurado exitosamente',
                    statuscode: 200,
                    data: existAdmin
                };
            } else {
                return {
                    message: 'El administrador ya existe',
                    statuscode: 400,
                    data: existAdmin
                };
            }
        }


        const encripado = await passwordHashado(password)

        const newAdmin = await Administrador.create({
            name,
            email,
            password: encripado
        });

        if (newAdmin) {
            return { message: 'Administrador creado', statuscode: 200, data: newAdmin };
        }

    } catch (error) {
        if (error instanceof Error) {
            return { message: error.message, statuscode: 400 };
        }
    }

    return { message: 'Error interno del servidor', statuscode: 500 };
};
