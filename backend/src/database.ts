import { Sequelize } from "sequelize";

// const { DB_DATABASE, } = process.env;


// export const db = new Sequelize(DATABASE_URL as string, {
export const db = new Sequelize(
    process.env.DB_DATABASE as string,
    process.env.DB_USERNAME as string,
    process.env.DB_PASSWORD as string, {
    logging: false,
    host: process.env.DB_HOST,
    dialect: "postgres",
    define: {
        freezeTableName: true,
    },
});

