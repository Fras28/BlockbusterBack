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
exports.CommentService = void 0;
const Coments_model_1 = __importDefault(require("../db/models/Coments.model"));
class CommentService {
    constructor(commentModel) {
        this.commentModel = commentModel;
    }
    newComment(comment) {
        return __awaiter(this, void 0, void 0, function* () {
            const inserComment = yield Coments_model_1.default.create(comment, { validate: true });
            return inserComment;
        });
    }
    editComment(coment, id) {
        return __awaiter(this, void 0, void 0, function* () {
            Coments_model_1.default.update({ coment }, { where: { id } });
            return coment;
        });
    }
    deletComment(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const comentD = yield Coments_model_1.default.destroy({ where: { id } });
            return !!comentD;
        });
    }
}
exports.CommentService = CommentService;
