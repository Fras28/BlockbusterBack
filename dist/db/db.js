"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const dbName = process.env.DB_NAME || "blockbuster_jcmk";
const dbUser = process.env.DB_USER || "blockbuster_jcmk_user";
const dbHost = process.env.DB_HOST || "dpg-ccms6opa6gdh5kdg511g-a";
const dbPassword = process.env.DB_PASSWORD || "ggEqLKmeIJ0xsQ9rkkuhdpM2SiB38w1E";
const sequelize = new sequelize_1.Sequelize(dbName, dbUser, dbPassword, {
    host: dbHost,
    dialect: "postgres",
    logging: false,
});
exports.default = sequelize;
