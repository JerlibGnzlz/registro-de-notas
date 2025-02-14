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
                statusCode: 400,
                message: "Esta cuenta no está registrada",
            };
        }

        const compararPassword = await passwordCorrecto(admin.password, existAdmin.password);

        if (!compararPassword) {
            return {
                statusCode: 403,
                message: "Clave inválida",
            };
        }

        const token = await generarToken(existAdmin.email);

        return {
            statusCode: 200,
            message: "Sesión iniciada correctamente",
            data: existAdmin,
            token,
        };
    } catch (error) {
        console.error("Error interno en AuthLogin:", error);
        return {
            statusCode: 500,
            message: "Error interno del servidor",
        };
    }
};
