import { passwordCorrecto } from '../../helpers/bycript';
import { generarToken } from '../../helpers/JwToken';
import { IAdministrador } from '../../interfaces/IAdministrador';
import { Administrador } from '../../models';

export const AuthLogin = async (admin: IAdministrador) => {
    try {
        const existAdmin = await Administrador.findOne({
            where: { email: admin.email },
        });

        if (!existAdmin) {
            return {
                message: "Esta cuenta no está registrada",
                statusCode: 400,
            };
        }

        const compararPassword = await passwordCorrecto(admin.password, existAdmin.password);

        if (!compararPassword) {
            return {
                message: "Clave inválida",
                statusCode: 403,
            };
        }

        const token = await generarToken(existAdmin.email);

        return {
            message: "Sesión y token válidos",
            statusCode: 200,
            data: existAdmin,
            token
        };
    } catch (error) {
        return {
            message: 'Error interno del servidor',
            statusCode: 500
        };
    }
};
