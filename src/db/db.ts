import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const dbName = process.env.DB_NAME as string || "blockbuster_jcmk";
const dbUser = process.env.DB_USER as string || "blockbuster_jcmk_user";
const dbHost = process.env.DB_HOST ||"dpg-ccms6opa6gdh5kdg511g-a";
const dbPassword = process.env.DB_PASSWORD || "ggEqLKmeIJ0xsQ9rkkuhdpM2SiB38w1E";

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  dialect: "postgres",
  logging: false,
});
export default sequelize;