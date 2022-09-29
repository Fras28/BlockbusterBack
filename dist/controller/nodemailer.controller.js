"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.nodemailer = exports.usersService = void 0;
const nodemailer_1 = require("../nodemailer");
const users_model_1 = __importDefault(require("../db/models/users.model"));
const user_service_1 = require("../services/user.service");
exports.usersService = new user_service_1.UserService(new users_model_1.default());
const emails = exports.usersService.getAllUsersEmail();
const nodemailer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        (yield emails).forEach((e) => {
            nodemailer_1.transporter.sendMail({
                from: '"BLOCKBUSTER" <blockbusterpf@gmail.com>',
                to: e,
                subject: "BLOCKBUSTER PF",
                text: "Welcome to Blockbuster experience! Hope you to enjoy it!!!",
            });
        });
        res.send("Email sended succefuly");
    }
    catch (e) {
        console.log(e);
    }
});
exports.nodemailer = nodemailer;
