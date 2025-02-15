import express, { Application } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import cookieParser from "cookie-parser";
import "dotenv/config";
import { db } from './database';
import './models/Notas';
import './models/Alumno';
import './models/Administrador';
import { indexRoutes } from './routes/index.routes';

const app: Application = express();


const PORT = process.env.PORT || 3000;

app.use(cookieParser("secretoCookie"));
app.use(cors({
    credentials: true
}));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/check-cookie", (req: any, res: any) => {
    if (!req.signedCookies.authCookie) {
        return res.status(401).json({ message: "La cookie ha expirado o no está presente" });
    }
    res.json({ message: "La cookie sigue activa", token: req.signedCookies.authCookie });
});

app.use('/api', indexRoutes);

const isDev = process.env.NODE_ENV === "development"
// const isDev = process.env.NODE_ENV === "production"

const server = async () => {

    try {
        await db.authenticate();
        console.log("Conexión exitosa a Sequelize");


        await db.sync({ force: isDev });
        console.log(
            `Base de datos sincronizada (${isDev ? 'force: true' : 'force: false'})`
        );

        app.listen(PORT, () => {
            console.log(`Servidor escuchando en: http://localhost:${PORT}`);
        });
    } catch (error) {
        console.log("No se puede iniciar el servidor", error);
    }
}
server();

