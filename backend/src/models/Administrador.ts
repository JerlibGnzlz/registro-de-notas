import { DataTypes, Model } from "sequelize";
import { db } from "../database";
import { IAdministrador } from '../interfaces/IAdministrador';


export class Administrador extends Model<IAdministrador> {
    id!: number;
    name!: string;
    email!: string;
    password!: string;
}


Administrador.init({
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
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize: db,
    modelName: 'administrador',
    timestamps: true,
    paranoid: true,
})