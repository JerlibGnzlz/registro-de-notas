import { Sequelize } from "sequelize";

const { DATABASE_URL } = process.env;


export const db = new Sequelize(DATABASE_URL as string, {
    logging: true,
    dialect: 'postgres',
    define: {
        freezeTableName: true,
    },
});

export const sequelize = async () => {
    try {
        await db.authenticate();
        console.log("Conexión a la base de datos exitosa...");

    } catch (error) {
        console.error("Error al conectar a la base de datos:", error);
    }
};