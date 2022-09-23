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
exports.AdminService = void 0;
const Blockbuster_model_1 = __importDefault(require("../db/models/Blockbuster.model"));
const Users_model_1 = __importDefault(require("../db/models/Users.model"));
class AdminService {
    constructor(UserModel) {
        this.UserModel = UserModel;
    }
    banUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let userX = yield Users_model_1.default.update({ status: false }, { where: { id } });
            return userX;
        });
    }
    desBanUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let userX = yield Users_model_1.default.update({ status: true }, { where: { id } });
            return userX;
        });
    }
    //----------------- Creador de peliculas -------
    addMovie(movie) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(movie);
            const findInDb = Blockbuster_model_1.default.findOne({ where: { name: movie.name } });
            if (!findInDb) {
                return yield Blockbuster_model_1.default.create(movie, { validate: true });
            }
            throw Error;
        });
    }
    deletMovie(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const byeMovie = yield Blockbuster_model_1.default.destroy({ where: { id } });
            return !!byeMovie;
        });
    }
    suspendMovie(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let movie = yield Blockbuster_model_1.default.update({ status: false }, { where: { id } });
            return movie;
        });
    }
    defineAdmin(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let userX = yield Users_model_1.default.update({ category: "admin" }, { where: { id } });
            return userX;
        });
    }
}
exports.AdminService = AdminService;
//editar peliculas
//quitar roll de admin
//editar precio de mermrecias 
