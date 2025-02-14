import { passwordHashado } from '../../helpers/bycript';
import { IAdministrador } from '../../interfaces/IAdministrador';
import { Administrador } from '../../models';

export const AuthRegister = async (admin: IAdministrador) => {


    if (!admin.name || !admin.email || !admin.password) {
        return {
            message: 'Todos los campos (name, email, password) son requeridos',
            statusCode: 400
        };
    }

    try {
        const existAdmin = await Administrador.findOne({
            where: { email: admin.email },
            paranoid: false
        });

        if (existAdmin) {
            return {
                message: 'El administrador ya existe',
                statusCode: 409,
                data: existAdmin
            };
        }

        const encrypted = await passwordHashado(admin.password);

        const newAdmin = await Administrador.create({
            name: admin.name,
            email: admin.email,
            password: encrypted,
        });


        return {
            message: 'Administrador creado exitosamente',
            statusCode: 201,
            newAdmin
        };
    } catch (error) {
        return {
            message: "Error al registrar el Administrador",
            statusCode: 500
        };
    }
};
