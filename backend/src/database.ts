import { Sequelize } from "sequelize";

const { DATABASE_URL } = process.env;


export const db = new Sequelize(DATABASE_URL as string, {
    logging: false,
    dialect: 'postgres',
    define: {
        freezeTableName: true,
    },
});

