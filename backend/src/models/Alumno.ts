import { DataTypes, Model } from "sequelize";
import { db } from "../database";
import { IAlumno } from '../interfaces/IAlumno';


export class Alumno extends Model<IAlumno> {
    id!: number;
    name!: string;
    email!: string;
    dni!: string;
    fecha_nacimiento!: Date;
}


Alumno.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    dni: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    fecha_nacimiento: {
        type: DataTypes.DATE,
        allowNull: false,
    }
}, {
    sequelize: db,
    modelName: 'alumno',
    timestamps: false,
})