"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const blockbuster_model_1 = __importDefault(require("./models/Blockbuster.model"));
const coments_model_1 = __importDefault(require("./models/Coments.model"));
const users_model_1 = __importDefault(require("./models/Users.model"));
const moviesComents_model_1 = __importDefault(require("./models/MoviesComents.model"));
const usersMovies_model_1 = __importDefault(require("./models/UsersMovies.model"));
const usersComments_model_1 = __importDefault(require("./models/UsersComments.model"));
const dbInit = () => Promise.all([
    blockbuster_model_1.default.sync({ alter: true }),
    coments_model_1.default.sync({ alter: true }),
    users_model_1.default.sync({ alter: true }),
])
    .then(dbInit2);
const dbInit2 = () => ([
    moviesComents_model_1.default.sync({ alter: true }),
    usersMovies_model_1.default.sync({ alter: true }),
    usersComments_model_1.default.sync({ alter: true })
]);
exports.default = dbInit;
