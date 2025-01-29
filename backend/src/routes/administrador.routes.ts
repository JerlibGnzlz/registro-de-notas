import { Request, Response } from "express";

export const registerUser = async (_req: Request, res: Response) => {
    res.send('desde la ruta');

}

