import Blockbuster from "../db/models/blockbuster.model";
import Users from "../db/models/Users.model";
// import { Movie } from "../types";
// import { Adm } from "../types";
// import { User } from "../types";

export type Movie = {
  id: number;
  name: string;
  year: string;
  genre: string;
  poster: string;
  country: string;
  rated: string;
  released: string;
  runtime: string;
  director: string;
  actors: string;
  plot: string;
  language: string;
  imdbVotes: string;
  imdbRating: string;
  status: boolean;
};
export type Adm = "admin";
export type User = {
  name: string;
  lastname: string;
  nickname: string;
  picture: string;
  email: string;
  status: boolean;
  category: Adm;
};

export class AdminService {
  constructor(private UserModel: Users) {}
  async banUser(id: number) {
    let userX = await Users.update({ status: false }, { where: { id } });
    return userX;
  }

  async desBanUser(id: number) {
    let userX = await Users.update({ status: true }, { where: { id } });
    return userX;
  }
  //----------------- Creador de peliculas -------
  async addMovie(movie: Movie) {
    console.log(movie);
    const findInDb = Blockbuster.findOne({ where: { name: movie.name } });
    if (!findInDb) {
      return await Blockbuster.create(movie, { validate: true });
    }
    throw Error;
  }
  async deletMovie(id: number): Promise<boolean> {
    const byeMovie = await Blockbuster.destroy({ where: { id } });
    return !!byeMovie;
  }
  async suspendMovie(id: number) {
    let movie = await Blockbuster.update({ status: false }, { where: { id } });
    return movie;
  }

  async defineAdmin(id: number) {
    let userX = await Users.update({ category: "admin" }, { where: { id } });
    return userX;
  }
  async editeName(id: number, string: string) {
    let editName = await Blockbuster.update(
      { name: string },
      { where: { id } }
    );
    return editName;
  }
  async editeYear(id: number, string: string) {
    let editName = await Blockbuster.update(
      { year: string },
      { where: { id } }
    );
    return editName;
  }
  async editePoster(id: number, string: string) {
    let editName = await Blockbuster.update(
      { poster: string },
      { where: { id } }
    );
    return editName;
  }
  async editeGenre(id: number, string: string) {
    let editName = await Blockbuster.update(
      { genre: string },
      { where: { id } }
    );
    return editName;
  }
  async editeCountry(id: number, string: string) {
    let editName = await Blockbuster.update(
      { country: string },
      { where: { id } }
    );
    return editName;
  }
  async editeRated(id: number, string: string) {
    let editName = await Blockbuster.update(
      { rated: string },
      { where: { id } }
    );
    return editName;
  }
  async editeReleased(id: number, string: string) {
    let editName = await Blockbuster.update(
      { released: string },
      { where: { id } }
    );
    return editName;
  }
  async editeRuntime(id: number, string: string) {
    let editName = await Blockbuster.update(
      { runtime: string },
      { where: { id } }
    );
    return editName;
  }
  async editeDirector(id: number, string: string) {
    let editName = await Blockbuster.update(
      { director: string },
      { where: { id } }
    );
    return editName;
  }
  async editeActors(id: number, string: string) {
    let editName = await Blockbuster.update(
      { actors: string },
      { where: { id } }
    );
    return editName;
  }
  async editePlot(id: number, string: string) {
    let editName = await Blockbuster.update(
      { plot: string },
      { where: { id } }
    );
    return editName;
  }
  async editeLanguage(id: number, string: string) {
    let editName = await Blockbuster.update(
      { language: string },
      { where: { id } }
    );
    return editName;
  }
  async editeimdbVotes(id: number, string: string) {
    let editName = await Blockbuster.update(
      { imdbVotes: string },
      { where: { id } }
    );
    return editName;
  }
  async editeimdbRating(id: number, string: string) {
    let editName = await Blockbuster.update(
      { imdbRating: string },
      { where: { id } }
    );
    return editName;
  }
}
//editar peliculas
//quitar roll de admin
//editar precio de mermrecias
