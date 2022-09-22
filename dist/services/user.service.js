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
const Users_model_1 = __importDefault(require("../db/models/Users.model"));
class UserService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    //-------------Crear Usuario --------
    insertUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const insertedUser = yield Users_model_1.default.create(user, { validate: true });
            return insertedUser;
        });
    }
    defineCategory(category, id) {
        return __awaiter(this, void 0, void 0, function* () {
            let userX = yield Users_model_1.default.update({ category }, { where: { id } });
            return userX;
        });
    }
    changePic(picture, id) {
        return __awaiter(this, void 0, void 0, function* () {
            let userX = yield Users_model_1.default.update({ picture }, { where: { id } });
            return userX;
        });
    }
}
exports.UserService = UserService;
