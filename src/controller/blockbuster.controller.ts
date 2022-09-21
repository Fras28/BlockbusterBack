import { Request, Response, Router } from "express";
import Blockbuster from "../db/models/Blockbuster.model";
import { BlockbusterService } from "../services/blockbuster.service";
import { MoviesArr } from "../infoSec";

const filmsName = MoviesArr;

const blockbusterService = new BlockbusterService(new Blockbuster());

export const getAllMovies = async (req: Request, res: Response) => {
  try {
    const result = await blockbusterService.getAll();

    return res.status(200).send(result);
  } catch (e) {
    return res.status(404).send("films not found");
  }
};

export const fullDbMovies = async (req: Request, res: Response) => {
  try {
    const dbMovies = await blockbusterService.getAll();

    if (dbMovies.length === 0) {
      const inserMovies = await blockbusterService.fullDataBase(filmsName);
      return res.status(200).send(inserMovies);
    }
    return res.status(200).send(dbMovies);
  } catch (e) {
    return res.status(404).send("films not found in db");
  }
};

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

// :D
