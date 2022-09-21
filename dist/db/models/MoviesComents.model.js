"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../db"));
const Blockbuster_model_1 = __importDefault(require("./Blockbuster.model"));
const Coments_model_1 = __importDefault(require("./Coments.model"));
class MoviesComents extends sequelize_1.Model {
}
MoviesComents.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    blockbusterId: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: Blockbuster_model_1.default,
            key: 'id'
        }
    },
    comentsId: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: Coments_model_1.default,
            key: 'id'
        }
    }
}, {
    sequelize: db_1.default
});
exports.default = MoviesComents;
