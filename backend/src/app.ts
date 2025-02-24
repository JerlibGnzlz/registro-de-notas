import express, { Application } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import "dotenv/config";
import { db } from './database';
import './models/Notas';
import './models/Alumno';
import './models/Administrador';
import { router } from './routes/index.routes';

const app: Application = express();


const PORT = process.env.PORT || 3000;

app.use(cors({
    credentials: true
}));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', router);


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

