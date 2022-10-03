"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../db"));
class fav extends sequelize_1.Model {
}
fav.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    idUser: { type: sequelize_1.DataTypes.INTEGER },
    idMovie: { type: sequelize_1.DataTypes.INTEGER },
}, { sequelize: db_1.default, paranoid: true });
exports.default = fav;
