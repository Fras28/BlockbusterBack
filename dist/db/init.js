"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const blockbuster_model_1 = __importDefault(require("./models/blockbuster.model"));
const dbInit = () => Promise.all([blockbuster_model_1.default.sync({ alter: true })]);
exports.default = dbInit;
