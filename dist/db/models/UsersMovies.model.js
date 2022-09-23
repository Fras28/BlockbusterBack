"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../db"));
const blockbuster_model_1 = __importDefault(require("./blockbuster.model"));
const Users_model_1 = __importDefault(require("./Users.model"));
class UsersMovies extends sequelize_1.Model {
}
UsersMovies.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    blockbusterId: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: blockbuster_model_1.default,
            key: 'id'
        }
    },
    usersId: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: Users_model_1.default,
            key: 'id'
        }
    }
}, {
    sequelize: db_1.default
});
exports.default = UsersMovies;
