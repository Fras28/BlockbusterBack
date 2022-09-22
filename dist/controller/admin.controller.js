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
exports.suspendMovie = exports.removeMovie = exports.newMovie = exports.newAdmin = exports.desBanUser = exports.banUser = void 0;
const Users_model_1 = __importDefault(require("../db/models/Users.model"));
const admin_service_1 = require("../services/admin.service");
const adminService = new admin_service_1.AdminService(new Users_model_1.default());
const banUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    try {
        yield adminService.banUser(id);
        res.status(200).send("User baned successfully");
    }
    catch (e) {
        res.status(404).send("User not found");
    }
});
exports.banUser = banUser;
const desBanUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    try {
        yield adminService.desBanUser(id);
        res.status(200).send("Reactivated user successfully");
    }
    catch (e) {
        res.status(404).send("User not found");
    }
});
exports.desBanUser = desBanUser;
const newAdmin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { idUser } = req.body;
    try {
        yield adminService.defineAdmin(idUser);
        res.status(200).send(`Now this id=${idUser} works as Admin `);
    }
    catch (e) {
        res.status(404).send(`this function don't work`);
    }
});
exports.newAdmin = newAdmin;
const newMovie = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const infoNewMovie = req.body;
    try {
        yield adminService.addMovie(infoNewMovie);
        res.status(200).send(`movie: ${infoNewMovie.name}  added successfully👍`);
    }
    catch (e) {
        res.status(400).send("something went rong whit this Movie");
    }
});
exports.newMovie = newMovie;
const removeMovie = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const idMovie = req.body;
    try {
        yield adminService.deletMovie(idMovie);
        res.status(200).send("The movie was perfectry deleted");
    }
    catch (e) {
        res.status(400).send("something went rong whit this Movie ​🎦​");
    }
});
exports.removeMovie = removeMovie;
const suspendMovie = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const idMovie = req.body;
    try {
        yield adminService.suspendMovie(idMovie);
        res.status(200).send("The movie was perfectry suspended 💤​");
    }
    catch (e) {
        res.status(400).send("something went rong whit this suspension ​🖕​​");
    }
});
exports.suspendMovie = suspendMovie;
