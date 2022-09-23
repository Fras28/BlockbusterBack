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
exports.fullDbMovies = exports.getAllMovies = void 0;
const blockbuster_model_1 = __importDefault(require("../db/models/blockbuster.model"));
const blockbuster_service_1 = require("../services/blockbuster.service");
const infoSec_1 = require("../infoSec");
const filmsName = infoSec_1.MoviesArr;
const blockbusterService = new blockbuster_service_1.BlockbusterService(new blockbuster_model_1.default());
const getAllMovies = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield blockbusterService.getAll();
        return res.status(200).send(result);
    }
    catch (e) {
        return res.status(404).send("films not found");
    }
});
exports.getAllMovies = getAllMovies;
const fullDbMovies = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dbMovies = yield blockbusterService.getAll();
        if (dbMovies.length === 0) {
            const inserMovies = yield blockbusterService.fullDataBase(filmsName);
            return res.status(200).send(inserMovies);
        }
        return res.status(200).send(dbMovies);
    }
    catch (e) {
        return res.status(404).send("films not found in db");
    }
});
exports.fullDbMovies = fullDbMovies;
// :D
