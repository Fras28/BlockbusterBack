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
exports.suspendMovie = exports.removeMovie = exports.newMovie = exports.newAdmin = exports.desBanUser = exports.banUser = void 0;
const users_model_1 = __importDefault(require("../db/models/users.model"));
const admin_service_1 = require("../services/admin.service");
const adminService = new admin_service_1.AdminService(new users_model_1.default());
//Bannear usuario
const banUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    try {
        yield adminService.banUser(id);
        res.status(200).send("User baned successfully");
    }
    catch (e) {
        res.status(404).send("User not found");
    }
});
exports.banUser = banUser;
//Unbann usuario 
const desBanUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    try {
        yield adminService.desBanUser(id);
        res.status(200).send("Reactivated user successfully");
    }
    catch (e) {
        res.status(404).send("User not found");
    }
});
exports.desBanUser = desBanUser;
//Crear nuevo administrador
const newAdmin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { idUser } = req.body;
    try {
        yield adminService.defineAdmin(idUser);
        res.status(200).send(`Now this id=${idUser} works as Admin `);
    }
    catch (e) {
        res.status(404).send(`this function don't work`);
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
    const idMovie = req.body;
    try {
        yield adminService.deletMovie(idMovie);
        res.status(200).send("The movie was perfectry deleted");
    }
    catch (e) {
        res.status(400).send("something went rong whit this Movie ​🎦​");
    }
});
exports.removeMovie = removeMovie;
//Bann pelicula
const suspendMovie = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const idMovie = req.body;
    try {
        yield adminService.suspendMovie(idMovie);
        res.status(200).send("The movie was perfectry suspended 💤​");
    }
    catch (e) {
        res.status(400).send("something went rong whit this suspension ​🖕​​");
    }
});
exports.suspendMovie = suspendMovie;
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
