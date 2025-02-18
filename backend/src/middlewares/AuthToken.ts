import Jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import { IPayload } from "../interfaces/IPayload";
import { Administrador } from "../models";

const { TOKEN } = process.env;

export const authToken = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer")) {
            res.status(401)
                .json({ message: "Acceso denegado, token no proporcionado" });
            return
        }

        const token = authHeader.split(" ")[1];

        const payload = Jwt.verify(token, TOKEN as string) as IPayload;

        const usuario = await Administrador.findOne({
            where: { email: payload.id },
        });

        if (!usuario) {
            res.status(403)
                .json({ message: "Usuario no autorizado" });
            return
        }

        req.user = usuario

        return next();
    } catch (error) {
        res.status(401)
            .json({ message: "Sesión o token inválido" });
        return
    }
};
