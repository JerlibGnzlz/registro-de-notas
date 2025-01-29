import express, { Application } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import "dotenv/config";
import { db } from './database';
import { router } from './routes';
import './models/Notas';
import './models/Alumno';
import './models/Administrador';

const app: Application = express();


const PORT = process.env.PORT || 3000;


app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);



const server = async () => {

    try {
        await db.authenticate();
        console.log("Conexión exitosa a Sequelize");

        await db.sync({ force: true });
        console.log("Conexión exitosa a la base de datos");


        app.listen(PORT, () => {
            console.log(`Servidor escuchando en: http://localhost:${PORT}`);
        });
    } catch (error) {
        console.log("No se puede iniciar el servidor", error);
    }
}
server();