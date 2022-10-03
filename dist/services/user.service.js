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
exports.UserService = void 0;
const users_model_1 = __importDefault(require("../db/models/users.model"));
const favMovie_model_1 = __importDefault(require("../db/models/favMovie.model"));
class UserService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    //-------------Crear Usuario --------
    insertUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            user.status = true;
            user.category = "user";
            console.log(user);
            const insertedUser = yield users_model_1.default.create(user, { validate: true });
            return insertedUser;
        });
    }
    defineCategoryGold(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let userX = yield users_model_1.default.update({ category: "gold" }, { where: { id } });
            return userX;
        });
    }
    defineCategoryTanction(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let userX = yield users_model_1.default.update({ category: "transition" }, { where: { id } });
            return userX;
        });
    }
    defineCategorySilver(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let userX = yield users_model_1.default.update({ category: "silver" }, { where: { id } });
            return userX;
        });
    }
    deletUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let deletUser = users_model_1.default.destroy({ where: { id } });
            return deletUser;
        });
    }
    changePic(name, date, lastname, id) {
        return __awaiter(this, void 0, void 0, function* () {
            let userX = yield users_model_1.default.update({ name, date, lastname }, { where: { id } });
            return userX;
        });
    }
    getUserId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let userX = yield users_model_1.default.findOne({ where: { id } });
            return userX;
        });
    }
    getAllUsersEmail() {
        return __awaiter(this, void 0, void 0, function* () {
            let emailUser = yield users_model_1.default.findAll();
            let mapMail = emailUser.map((e) => e.email);
            return mapMail;
        });
    }
    newFav(idMovie, idUser) {
        return __awaiter(this, void 0, void 0, function* () {
            let newARR = yield favMovie_model_1.default.findAll({ where: { idUser: idUser } });
            let arrFav = newARR.filter(e => e.idMovie === idMovie);
            if (!arrFav) {
                yield favMovie_model_1.default.create({ idMovie, idUser }, { validate: true });
                return "new FAV movie";
            }
            else {
                let arrNoFav = yield favMovie_model_1.default.destroy({ where: { id: arrFav[0].id } });
                return arrNoFav;
            }
        });
    }
    listFav() {
        return __awaiter(this, void 0, void 0, function* () {
            const listMovies = yield favMovie_model_1.default.findAll();
            return listMovies;
        });
    }
}
exports.UserService = UserService;
