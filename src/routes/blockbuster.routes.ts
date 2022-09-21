import { Request, Response, Router } from "express";
import Blockbuster from "../db/models/Blockbuster.model";
import { BlockbusterService } from "../services/blockbuster.service";
import { addMovie, fullDbMovies, getAllMovies } from "../controller/blockbuster.controller";
import { addUser } from "../controller/users.controller";

const router = Router();

router.get("/home", getAllMovies);
router.get("/",fullDbMovies)
router.post('/addM', addMovie)
router.post('/newU', addUser)


// router.post();

export default router;
