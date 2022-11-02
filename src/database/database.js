import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("ejerciciouno", "postgres", "root2022", {
  host: "localhost",
  dialect: "postgres",
});
