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
exports.bannComments = exports.getUser = exports.fullUsers = exports.removeMovie = exports.newMovie = exports.newAdmin = exports.unBannUser = exports.bannUser = void 0;
const users_model_1 = __importDefault(require("../db/models/users.model"));
const admin_service_1 = require("../services/admin.service");
const adminService = new admin_service_1.AdminService(new users_model_1.default());
//Bannear usuario
const bannUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    try {
        let user = yield adminService.getUserById(id);
        console.log(user);
        if (user != null) {
            yield adminService.bannUser(id);
            res.status(200).send("User banned successfully!");
        }
        else {
            res.status(404).send("User not found");
        }
    }
    catch (e) {
        res.status(404).send(e);
    }
});
exports.bannUser = bannUser;
//Unbann usuario
const unBannUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    try {
        let user = yield adminService.getUserById(id);
        console.log(user);
        if (user != null) {
            yield adminService.unnBanUser(id);
            res.status(200).send("User unbanned successfully!");
        }
        else {
            res.status(404).send("User not found");
        }
    }
    catch (e) {
        res.status(404).send(e);
    }
});
exports.unBannUser = unBannUser;
//Crear nuevo administrador
const newAdmin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    try {
        let user = yield adminService.getUserById(id);
        console.log(user);
        if (user != null) {
            yield adminService.defineAdmin(id);
            res.status(200).send(`new admin id=${id}`);
        }
        else {
            res.status(404).send(`Something went wrong! Try again.`);
        }
    }
    catch (e) {
        res.status(404).send(e);
    }
});
exports.newAdmin = newAdmin;
//Crear nueva pelicula
const newMovie = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const infoNewMovie = req.body;
    try {
        yield adminService.addMovie(infoNewMovie);
        res.status(200).send(`movie: ${infoNewMovie.name}  added successfully👍`);
    }
    catch (e) {
        res.status(400).send("something went rong whit this Movie");
    }
});
exports.newMovie = newMovie;
//Borrar pelicula
const removeMovie = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    console.log(id);
    try {
        yield adminService.deletMovie(id);
        res.status(200).send("The movie was deleted");
    }
    catch (e) {
        res.status(400).send("Something went rong whit this Movie ​🎦​");
    }
});
exports.removeMovie = removeMovie;
//Busca todos los usuarios
const fullUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const usersArr = yield adminService.allUsers();
        res.status(200).send(usersArr);
    }
    catch (e) {
        res.status(404).send("No users in DB ");
    }
});
exports.fullUsers = fullUsers;
//Busca user por email
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.params;
    try {
        let user = yield adminService.getUserByEmail(email);
        res.status(200).send(user);
    }
    catch (e) {
        res.status(404).send("User not found");
    }
});
exports.getUser = getUser;
// Bann comments
const bannComments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { idUser } = req.body;
    console.log(idUser);
    try {
        let bannedComment = yield adminService.bannComment(idUser);
        res.status(200).send(bannedComment);
    }
    catch (e) {
        res.status(404).send("User not found");
    }
});
exports.bannComments = bannComments;
/*export const getUserById = async (req: Request, res: Response) => {
  const id = req.body;
  try{
    const idOne = await adminService.userIdOne(id)
    res.status(200).send(idOne)
  }catch(e){
    res.status(400).send("User not found!")
  }
}*/
// export const editeMovie = async (req: Request, res: Response) => {
//   const Movie:Movie = req.body;
//   const text:string = req.body;
//   const id = req.params;
//   try {
//     console.log(text)
//     if (Movie.name) {
//       await adminService.editeName(Movie.id, text);
//       res.status(200).send(`Movix ${Movie.name} edited successfully👍`);
//     }
//     if (Movie.year) {
//       await adminService.editeYear(Movie.id, text);
//       res.status(200).send(`Movie ${Movie.name} edited successfully👍`);
//     }
//     if (Movie.genre) {
//       await adminService.editeGenre(Movie.id, text);
//       res.status(200).send(`Movie ${Movie.name} edited successfully👍`);
//     }
//     if (Movie.poster) {
//       await adminService.editePoster(Movie.id, text);
//       res.status(200).send(`Movie ${Movie.name} edited successfully👍`);
//     }
//     if (Movie.country) {
//       await adminService.editeCountry(Movie.id, text);
//       res.status(200).send(`Movie ${Movie.name} edited successfully👍`);
//     }
//     if (Movie.rated) {
//       await adminService.editeRated(Movie.id, text);
//       res.status(200).send(`Movie ${Movie.name} edited successfully👍`);
//     }
//     if (Movie.released) {
//       await adminService.editeReleased(Movie.id, text);
//       res.status(200).send(`Movie ${Movie.name} edited successfully👍`);
//     }
//     if (Movie.runtime) {
//       await adminService.editeRuntime(Movie.id, text);
//       res.status(200).send(`Movie ${Movie.name} edited successfully👍`);
//     }
//     if (Movie.director) {
//       await adminService.editeDirector(Movie.id, text);
//       res.status(200).send(`Movie ${Movie.name} edited successfully👍`);
//     }
//     if (Movie.actors) {
//       await adminService.editeActors(Movie.id, text);
//       res.status(200).send(`Movie ${Movie.name} edited successfully👍`);
//     }
//     if (Movie.plot) {
//       await adminService.editePlot(Movie.id, text);
//       res.status(200).send(`Movie ${Movie.name} edited successfully👍`);
//     }
//     if (Movie.language) {
//       await adminService.editeLanguage(Movie.id, text);
//       res.status(200).send(`Movie ${Movie.name} edited successfully👍`);
//     }
//     if (Movie.imdbVotes) {
//       await adminService.editeimdbVotes(Movie.id, text);
//       res.status(200).send(`Movie ${Movie.name} edited successfully👍`);
//     }
//     if (Movie.imdbRating) {
//       await adminService.editeimdbRating(Movie.id, text);
//       res.status(200).send(`Movie ${Movie.name} edited successfully👍`);
//     }
//   } catch (e) {
//     res.status(400).send("something went rong whit this Movix");
//   }
// };
// export const editeMovie = async (req: Request, res: Response) => {
// //   const Movie:Movie = req.body;
// //  const movieEdited = await BlockBD.post(Movie, { where: Movie.id  })
// //  res.status(200).send( movieEdited)
// const {name,year,genre,poster,updatedAt,createdAt,rated,released,runtime,director,actors,language,plot,country,imdbVotes,imdbRating,status,deletedAt} = req.body;
//   const id = req.params;
//   // console.log(Movie)
//   console.log(id)
//   const updatedM =  Blockbuster.update({name,year,genre,poster,updatedAt,createdAt,rated,released,runtime,director,actors,language,plot,country,imdbVotes,imdbRating,status,deletedAt}, {where:{id}})
//   res.status(200).send(updatedM) ;
// }
