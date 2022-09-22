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
exports.picProfile = exports.afterPay = exports.addUser = exports.usersService = void 0;
const Users_model_1 = __importDefault(require("../db/models/Users.model"));
const user_service_1 = require("../services/user.service");
exports.usersService = new user_service_1.UserService(new Users_model_1.default());
const addUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req);
    try {
        const dbUser = yield exports.usersService.insertUser(req.body);
        console.log(dbUser);
        return res.status(200).send(dbUser);
    }
    catch (e) {
        return res.status(400).send(e);
    }
});
exports.addUser = addUser;
const afterPay = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { category, id } = req.body;
    try {
        if (category === "silver") {
            yield exports.usersService.defineCategory(category, id);
            res
                .status(200)
                .send(`thank you for the suscription, now you have ${category} memership 🥈​​ `);
        }
        if (category === "gold") {
            yield exports.usersService.defineCategory(category, id);
            res
                .status(200)
                .send(`thank you for the suscription, now you have ${category} memership 🥇​ `);
        }
    }
    catch (e) {
        res.status(404).send("something went rong whit the suscription 👎​");
    }
});
exports.afterPay = afterPay;
const picProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { pic, id } = req.body;
    try {
        yield exports.usersService.changePic(pic, id);
        res.status(200).send("Succsesfuly change 👍​");
    }
    catch (e) {
        res.status(404).send("something went rond with the change👎​");
    }
});
exports.picProfile = picProfile;
