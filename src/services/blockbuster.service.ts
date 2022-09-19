import axios from "axios";
import Blockbuster from "../db/models/Blockbuster";
const url: string = `http://www.omdbapi.com/?t=`;
const apiKey: string = `8c217066`;

type Movie = {
  name: string;
  year: string;
  genre: string;
  poster: string;
  country: string;
};

export class BlockbusterService {
  constructor(private blockbusterModel: Blockbuster) {}
  //-----------------Metodo para traer peliculas de Base de Datos-----
  async getAll() {
    
    const blockbusterRows = await Blockbuster.findAll();
    console.log(blockbusterRows.length)
    return blockbusterRows;
  }

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
      })

    return ;
  }

  //  async insertMany (listOfFilms:Movie[]){

  //   const filtMovies: any = listOfFilms.filter((c) => c !== undefined);

  //   await  Blockbuster.bulkCreate(filtMovies, { validate: true });

  //  }
  async insertOne(movie: Movie) {
    await Blockbuster.create(movie, { validate: true });
  }
}
