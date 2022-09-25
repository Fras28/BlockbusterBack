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
exports.deleteComments = exports.editComments = exports.fullDBComments = void 0;
const coments_model_1 = __importDefault(require("../db/models/coments.model"));
const coments_service_1 = require("../services/coments.service");
const commentsService = new coments_service_1.CommentService(new coments_model_1.default());
//CREA COMENTARIOS EN BD
const fullDBComments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let movieId = req.params;
        // let xParamId = parseInt(movieId);
        const commentFullData = req.body;
        // console.log(xParamId)
        // commentFullData.movieId = xParamId;
        const dbComments = yield coments_model_1.default.findAll();
        if (dbComments.length === 0) {
            yield commentsService.newComment(commentFullData);
            const dbComments = yield coments_model_1.default.findAll();
            return res.status(200).send(dbComments);
        }
        return res.status(200).send(dbComments);
    }
    catch (e) {
        return res.status(400).send("Comments not found in db!");
    }
});
exports.fullDBComments = fullDBComments;
//EDITA COMENTARIOS
const editComments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { comment, id } = req.body;
    try {
        const dbComment = yield commentsService.editComment(comment, id);
        return res.status(200).send(dbComment);
    }
    catch (e) {
        return res.status(400).send(e);
    }
});
exports.editComments = editComments;
//BORRAR COMENTARIOS
const deleteComments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    try {
        const dbComment = yield commentsService.deletComment(id);
        return res.status(200).send(dbComment);
    }
    catch (e) {
        return res.status(400).send(e);
    }
});
exports.deleteComments = deleteComments;
