import express, { Application } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import "dotenv/config";
import { db } from './database';
import './models/Notas';
import './models/Alumno';
import './models/Administrador';
import { indexRoutes } from './routes/index.routes';
// import { runSeeder } from './seeders/runSeeders';


const app: Application = express();


const PORT = process.env.PORT || 3000;


app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', indexRoutes);



const server = async () => {

    try {
        await db.authenticate();
        console.log("Conexión exitosa a Sequelize");

        // await runSeeder();
        // console.log('Servidor iniciado con seeder ejecutado.');

        await db.sync({ force: false });
        console.log("Conexión exitosa a la base de datos");



        app.listen(PORT, () => {
            console.log(`Servidor escuchando en: http://localhost:${PORT}`);
        });
    } catch (error) {
        console.log("No se puede iniciar el servidor", error);
    }
}
server();

