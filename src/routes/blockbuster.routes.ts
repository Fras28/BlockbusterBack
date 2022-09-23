import { Request, Response, Router } from "express";
import Blockbuster from "../db/models/Blockbuster.model";
import { BlockbusterService } from "../services/blockbuster.service";
import { addMovie, fullDbMovies, getMovieId} from "../controller/blockbuster.controller";
import { addUser } from "../controller/users.controller";
// import { editeMovie } from "../controller/admin.controller";

const router = Router();

//router.get("/home", getAllMovies);
router.get("/movies",fullDbMovies)
router.post('/movies/addM', addMovie)
router.get('/movies/detail/:id', getMovieId)
router.post('/movies/newU', addUser)
// router.patch('/movies/edit/:id', editeMovie)



export default router;
