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
exports.addMovie = exports.fullDbMovies = void 0;
const Blockbuster_model_1 = __importDefault(require("../db/models/Blockbuster.model"));
const blockbuster_service_1 = require("../services/blockbuster.service");
const infoSec_1 = require("../infoSec");
const filmsName = infoSec_1.MoviesArr;
const blockbusterService = new blockbuster_service_1.BlockbusterService(new Blockbuster_model_1.default());
//MEDIANTE EL SERVICIO HACE EL GET A LA API
// export const getAllMovies = async (req: Request, res: Response) => {
//   try {
//     const result = await blockbusterService.getAll();
//     return res.status(200).send(result);
//   } catch (e) {
//     return res.status(404).send("films not found");
//   }successfully
// };
//MEDIANTE EL SERVICIO METE LAS PELICULAS EN BD
const fullDbMovies = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dbMovies = yield Blockbuster_model_1.default.findAll();
        if (dbMovies.length === 0) {
            yield blockbusterService.fullDataBase(filmsName);
            const dbMovies = yield Blockbuster_model_1.default.findAll();
            return res.status(200).send(dbMovies);
        }
        return res.status(200).send(dbMovies);
    }
    catch (e) {
        return res.status(404).send("films not found in db!");
    }
});
exports.fullDbMovies = fullDbMovies;
//POST PARA CREAR PELICULAS
const addMovie = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req);
    try {
        const dbMovie = yield blockbusterService.insertOne(req.body);
        console.log(dbMovie);
        return res.status(200).send(dbMovie);
    }
    catch (e) {
        return res.status(404).send(e);
    }
});
exports.addMovie = addMovie;
