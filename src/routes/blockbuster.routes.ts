import { Request, Response, Router } from "express";
import Blockbuster from "../db/models/Blockbuster.model";
import { BlockbusterService } from "../services/blockbuster.service";
import { addMovie, fullDbMovies} from "../controller/blockbuster.controller";
import { addUser } from "../controller/users.controller";

const router = Router();

//router.get("/home", getAllMovies);
router.get("movie/",fullDbMovies)
router.post('movie/addM', addMovie)
router.post('movie/newU', addUser)


export default router;
