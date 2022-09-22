"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Blockbuster_model_1 = __importDefault(require("./models/Blockbuster.model"));
const Coments_model_1 = __importDefault(require("./models/Coments.model"));
const Users_model_1 = __importDefault(require("./models/Users.model"));
const MoviesComents_model_1 = __importDefault(require("./models/MoviesComents.model"));
const UsersMovies_model_1 = __importDefault(require("./models/UsersMovies.model"));
const UsersComments_model_1 = __importDefault(require("./models/UsersComments.model"));
const dbInit = () => Promise.all([
    Blockbuster_model_1.default.sync({ alter: true }),
    Coments_model_1.default.sync({ alter: true }),
    Users_model_1.default.sync({ alter: true }),
])
    .then(dbInit2);
const dbInit2 = () => ([
    MoviesComents_model_1.default.sync({ alter: true }),
    UsersMovies_model_1.default.sync({ alter: true }),
    UsersComments_model_1.default.sync({ alter: true })
]);
exports.default = dbInit;
