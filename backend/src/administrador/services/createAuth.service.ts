import { passwordHashado } from '../../helpers/bycript';
import { Administrador } from '../../models';

export const AuthRegister = async (name: string, email: string, password: string) => {


    if (!name || !email || !password) {
        return {
            message: 'Todos los campos (name, email, password) son requeridos',
            statusCode: 400
        };
    }

    try {
        const existAdmin = await Administrador.findOne({
            where: { email },
            paranoid: false
        });

        if (existAdmin) {
            return {
                message: 'El administrador ya existe',
                statusCode: 400,
                data: [existAdmin]
            };
        }

        const encrypted = await passwordHashado(password);

        const newAdmin = await Administrador.create({
            name,
            email,
            password: encrypted,
        });


        return {
            message: 'Administrador creado exitosamente',
            statusCode: 201,
            newAdmin
        };
    } catch (error) {
        return {
            message: error instanceof Error ? error.message : 'Error interno del servidor',
            statusCode: 500
        };
    }
};
