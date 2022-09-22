import Blockbuster from "../db/models/Blockbuster.model";
import Users from "../db/models/Users.model";

type Movie = {
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
  status:boolean
};
type Adm = "admin";
type User = {
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
  async banUser( id: number) {
    let userX = await Users.update({ status:false }, { where: { id } });
    return userX;
  }

  async desBanUser( id: number) {
    let userX = await Users.update({ status:true }, { where: { id } });
    return userX;
  }
  //----------------- Creador de peliculas -------
  async addMovie(movie: Movie) {
    console.log(movie);
    const findInDb = Blockbuster.findOne({where:{name:movie.name}});
    if(!findInDb){
      return await Blockbuster.create(movie, { validate: true });
    }
      throw Error
  }
  async deletMovie(id: number): Promise<boolean> {
    const byeMovie = await Blockbuster.destroy({ where: { id } });
    return !!byeMovie;
  }
  async suspendMovie(id: number) {
    let movie = await Blockbuster.update({ status:false }, { where: { id } });
    return movie;
  }


  async defineAdmin(id: number) {
    let userX = await Users.update({ category: "admin" }, { where: { id } });
    return userX;
  }
}
//editar peliculas
//quitar roll de admin
//editar precio de mermrecias 