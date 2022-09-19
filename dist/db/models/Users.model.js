"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../db"));
class Users extends sequelize_1.Model {
}
Users.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true
    },
    lastname: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true
    },
    nickname: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true
    },
    picture: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true
    },
}, { sequelize: db_1.default, paranoid: true });
exports.default = Users;
