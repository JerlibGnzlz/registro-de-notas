import Jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import { IPayload } from "../interfaces/IPayload";
import { Administrador } from "../models";

const { TOKEN } = process.env;

export const authToken = async (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Acceso denegado, token no proporcionado" });
    }

    const token = authHeader.split(" ")[1];

    try {
        const payload = Jwt.verify(token, TOKEN as string) as IPayload;

        const usuario = await Administrador.findOne({
            where: { email: payload.id },
        });

        if (!usuario) {
            return res.status(403).json({ message: "Usuario no autorizado" });
        }

        req.user = usuario;
        return next();
    } catch (error) {
        return res.status(401).json({ message: "Sesión o token inválido" });
    }
};
