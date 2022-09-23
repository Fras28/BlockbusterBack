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
const blockbuster_model_1 = __importDefault(require("../db/models/blockbuster.model"));
const users_model_1 = __importDefault(require("../db/models/users.model"));
class AdminService {
    constructor(UserModel) {
        this.UserModel = UserModel;
    }
    banUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let userX = yield users_model_1.default.update({ status: false }, { where: { id } });
            return userX;
        });
    }
    desBanUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let userX = yield users_model_1.default.update({ status: true }, { where: { id } });
            return userX;
        });
    }
    //----------------- Creador de peliculas -------
    addMovie(movie) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(movie);
            const findInDb = blockbuster_model_1.default.findOne({ where: { name: movie.name } });
            if (!findInDb) {
                return yield blockbuster_model_1.default.create(movie, { validate: true });
            }
            throw Error;
        });
    }
    deletMovie(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const byeMovie = yield blockbuster_model_1.default.destroy({ where: { id } });
            return !!byeMovie;
        });
    }
    suspendMovie(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let movie = yield blockbuster_model_1.default.update({ status: false }, { where: { id } });
            return movie;
        });
    }
    defineAdmin(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let userX = yield users_model_1.default.update({ category: "admin" }, { where: { id } });
            return userX;
        });
    }
    editeName(id, string) {
        return __awaiter(this, void 0, void 0, function* () {
            let editName = yield blockbuster_model_1.default.update({ name: string }, { where: { id } });
            return editName;
        });
    }
    editeYear(id, string) {
        return __awaiter(this, void 0, void 0, function* () {
            let editName = yield blockbuster_model_1.default.update({ year: string }, { where: { id } });
            return editName;
        });
    }
    editePoster(id, string) {
        return __awaiter(this, void 0, void 0, function* () {
            let editName = yield blockbuster_model_1.default.update({ poster: string }, { where: { id } });
            return editName;
        });
    }
    editeGenre(id, string) {
        return __awaiter(this, void 0, void 0, function* () {
            let editName = yield blockbuster_model_1.default.update({ genre: string }, { where: { id } });
            return editName;
        });
    }
    editeCountry(id, string) {
        return __awaiter(this, void 0, void 0, function* () {
            let editName = yield blockbuster_model_1.default.update({ country: string }, { where: { id } });
            return editName;
        });
    }
    editeRated(id, string) {
        return __awaiter(this, void 0, void 0, function* () {
            let editName = yield blockbuster_model_1.default.update({ rated: string }, { where: { id } });
            return editName;
        });
    }
    editeReleased(id, string) {
        return __awaiter(this, void 0, void 0, function* () {
            let editName = yield blockbuster_model_1.default.update({ released: string }, { where: { id } });
            return editName;
        });
    }
    editeRuntime(id, string) {
        return __awaiter(this, void 0, void 0, function* () {
            let editName = yield blockbuster_model_1.default.update({ runtime: string }, { where: { id } });
            return editName;
        });
    }
    editeDirector(id, string) {
        return __awaiter(this, void 0, void 0, function* () {
            let editName = yield blockbuster_model_1.default.update({ director: string }, { where: { id } });
            return editName;
        });
    }
    editeActors(id, string) {
        return __awaiter(this, void 0, void 0, function* () {
            let editName = yield blockbuster_model_1.default.update({ actors: string }, { where: { id } });
            return editName;
        });
    }
    editePlot(id, string) {
        return __awaiter(this, void 0, void 0, function* () {
            let editName = yield blockbuster_model_1.default.update({ plot: string }, { where: { id } });
            return editName;
        });
    }
    editeLanguage(id, string) {
        return __awaiter(this, void 0, void 0, function* () {
            let editName = yield blockbuster_model_1.default.update({ language: string }, { where: { id } });
            return editName;
        });
    }
    editeimdbVotes(id, string) {
        return __awaiter(this, void 0, void 0, function* () {
            let editName = yield blockbuster_model_1.default.update({ imdbVotes: string }, { where: { id } });
            return editName;
        });
    }
    editeimdbRating(id, string) {
        return __awaiter(this, void 0, void 0, function* () {
            let editName = yield blockbuster_model_1.default.update({ imdbRating: string }, { where: { id } });
            return editName;
        });
    }
}
exports.AdminService = AdminService;
//editar peliculas
//quitar roll de admin
//editar precio de mermrecias
