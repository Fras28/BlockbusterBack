import axios from "axios";
import Blockbuster from "../db/models/Blockbuster.model";
import Users from "../db/models/Users.model";
const url: string = `http://www.omdbapi.com/?t=`;
const apiKey: string = `d92c2f98`;

type Movie = {
  name: string;
  year: string;
  genre: string;
  poster: string;
  country: string;
};


export class BlockbusterService {
  constructor(private blockbusterModel: Blockbuster) {}
 

  //------------Metodo para llenar Base de Datos-------
  async fullDataBase(MoviesArr: string[]) {
    MoviesArr.map(async (e: string) => {
      let films = await axios.get(url, { params: { t: e, apikey: apiKey } });
      const {
        Title: name,
        Year: year,
        Genre: genre,
        Poster: poster,
        Country: country,
      } = films.data;
      await this.insertOne({
        name,
        year,
        genre,
        poster,
        country,
      });
    });
    return;
  }
 //-----------------Metodo para traer peliculas de Base de Datos-----
  async getAll() {
    const blockbusterRows = await Blockbuster.findAll();
    console.log(blockbusterRows.length);
    return blockbusterRows;
  }
  //----------------- Creador de peliculas -------
  async insertOne(movie: Movie) {
    console.log(movie)
    return await Blockbuster.create(movie, { validate: true });
  }
}
