import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import "dotenv/config";


const app: Application = express();


const PORT = process.env.PORT || 3000;

const router = express.Router();

app.use(router);
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


router.get('/', (_req: Request, res: Response) => {
    res.send('hola registro de notas');
});


app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});