"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const blockbuster_model_1 = __importDefault(require("./models/blockbuster.model"));
const coments_model_1 = __importDefault(require("./models/coments.model"));
const users_model_1 = __importDefault(require("./models/users.model"));
const dbInit = () => Promise.all([
    blockbuster_model_1.default.sync({ alter: true }),
    coments_model_1.default.sync({ alter: true }),
    users_model_1.default.sync({ alter: true }),
]);
exports.default = dbInit;
