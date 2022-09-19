import { Request, Response, Router } from "express";
import Blockbuster from "../db/models/Blockbuster";
import { BlockbusterService } from "../services/blockbuster.service";
import { fullDbMovies, getAllMovies } from "./BDcontroller";

const router = Router();

const blockbusterService = new BlockbusterService(new Blockbuster());

router.get("/home", getAllMovies);
router.get("/",fullDbMovies)


// router.post();

export default router;
