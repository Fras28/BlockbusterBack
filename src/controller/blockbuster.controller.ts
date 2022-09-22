import { Request, Response, Router } from "express";

import Blockbuster from "../db/models/Blockbuster.model";
import { BlockbusterService } from "../services/blockbuster.service";
import { MoviesArr } from "../infoSec";

const filmsName = MoviesArr;

const blockbusterService = new BlockbusterService(new Blockbuster());

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
export const fullDbMovies = async (req: Request, res: Response) => {
  try {
    const dbMovies = await Blockbuster.findAll()
    if (dbMovies.length === 0) {
     await blockbusterService.fullDataBase(filmsName);
      const dbMovies = await Blockbuster.findAll()
      return res.status(200).send(dbMovies);
    }
    return res.status(200).send(dbMovies);
  } catch (e) {
    return res.status(404).send("films not found in db!");
  }
};

//POST PARA CREAR PELICULAS
export const addMovie = async (req: Request, res: Response) => {
  console.log(req);
  try {
    const dbMovie = await blockbusterService.insertOne(req.body);
    console.log(dbMovie);
    return res.status(200).send(dbMovie);
  } catch (e) {
    return res.status(404).send(e);
  }

};



