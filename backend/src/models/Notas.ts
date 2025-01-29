import { DataTypes, Model } from "sequelize";
import { db } from "../database";
import { INotas } from '../interfaces/INotas';


export class Notas extends Model<INotas> {
    id!: number;
    materia!: string;
    calificacion!: number;
}


Notas.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    materia: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    calificacion: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    sequelize: db,
    modelName: 'notas',
    timestamps: false,
})