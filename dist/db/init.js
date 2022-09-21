"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Blockbuster_model_1 = __importDefault(require("./models/Blockbuster.model"));
const Coments_model_1 = __importDefault(require("./models/Coments.model"));
const Users_model_1 = __importDefault(require("./models/Users.model"));
const MoviesComents_model_1 = __importDefault(require("./models/MoviesComents.model"));
const dbInit = () => Promise.all([
    Blockbuster_model_1.default.sync({ alter: true }),
    Coments_model_1.default.sync({ alter: true }),
    Users_model_1.default.sync({ alter: true }),
    MoviesComents_model_1.default.sync({ alter: true }),
]);
exports.default = dbInit;
