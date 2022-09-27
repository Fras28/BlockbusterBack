import users from "../db/models/users.model";
import { Request, Response } from "express";
import { AdminService } from "../services/admin.service";

const adminService = new AdminService(new users());

//Bannear usuario
export const bannUser = async (req: Request, res: Response) => {
  const { id } = req.body;
  try {
    let user = await adminService.getUserById(id);
    console.log(user);
    if (user != null) {
      await adminService.bannUser(id);
      res.status(200).send("User banned successfully!");
    } else {
      res.status(404).send("User not found");
    }
  } catch (e) {
    res.status(404).send(e);
  }
};

//Unbann usuario
export const unBannUser = async (req: Request, res: Response) => {
  const { id } = req.body;
  try {
    let user = await adminService.getUserById(id);
    console.log(user);
    if (user != null) {
      await adminService.unnBanUser(id);
      res.status(200).send("User unbanned successfully!");
    } else {
      res.status(404).send("User not found");
    }
  } catch (e) {
    res.status(404).send(e);
  }
};

//Crear nuevo administrador
export const newAdmin = async (req: Request, res: Response) => {
  const { id } = req.body;
  try {
    let user = await adminService.getUserById(id);
    console.log(user);
    if (user != null) {
      await adminService.defineAdmin(id);
      res.status(200).send(`new admin id=${id}`);
    } else {
      res.status(404).send(`Something went wrong! Try again.`);
    }
  } catch (e) {
    res.status(404).send(e);
  }
};

//Crear nueva pelicula
export const newMovie = async (req: Request, res: Response) => {
  const infoNewMovie = req.body;
  try {
    await adminService.addMovie(infoNewMovie);
    res.status(200).send(`movie: ${infoNewMovie.name}  added successfully👍`);
  } catch (e) {
    res.status(400).send("something went rong whit this Movie");
  }
};

//Borrar pelicula
export const removeMovie = async (req: Request, res: Response) => {
  const { id } = req.body;
  console.log(id);
  try {
    await adminService.deletMovie(id);
    res.status(200).send("The movie was deleted");
  } catch (e) {
    res.status(400).send("Something went rong whit this Movie ​🎦​");
  }
};

//Busca todos los usuarios
export const fullUsers = async (req: Request, res: Response) => {
  try {
    const usersArr = await adminService.allUsers();
    res.status(200).send(usersArr);
  } catch (e) {
    res.status(404).send("No users in DB ");
  }
};

//Busca user por email
export const getUser = async (req: Request, res: Response) => {
  const { email } = req.params;
  try {
    let user = await adminService.getUserByEmail(email);
    res.status(200).send(user);
  } catch (e) {
    res.status(404).send("User not found");
  }
};

// Bann comments
export const bannComments = async (req: Request, res: Response) => {
  const { idUser } = req.body;
  console.log(idUser)
  try {
    let bannedComment = await adminService.bannComment(idUser);
    res.status(200).send(bannedComment);
  } catch (e) {
    res.status(404).send("User not found");
  }
};



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
