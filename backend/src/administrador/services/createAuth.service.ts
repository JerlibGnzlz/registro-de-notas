import { passwordCorrecto, passwordHashado } from '../../helpers/bycript';
import { generarToken } from '../../helpers/JwToken';
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
                data: existAdmin
            };
        }

        const hashedPassword = await passwordHashado(password);

        const newAdmin = await Administrador.create({
            name,
            email,
            password: hashedPassword,
        });


        const compararPassword = await passwordCorrecto(password, hashedPassword)

        let data;

        if (compararPassword) {
            const token = await generarToken(newAdmin.email)

            data = {
                user: newAdmin,
                token
            }

        }

        return {
            message: 'Administrador creado exitosamente',
            statusCode: 201,
            data
        };
    } catch (error) {
        return {
            message: error instanceof Error ? error.message : 'Error interno del servidor',
            statusCode: 500
        };
    }
};
