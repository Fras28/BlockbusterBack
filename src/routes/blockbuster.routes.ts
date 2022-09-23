import { Request, Response, Router } from "express";
import Blockbuster from "../db/models/Blockbuster.model";
import { BlockbusterService } from "../services/blockbuster.service";
import { addMovie, fullDbMovies, getMovieId} from "../controller/blockbuster.controller";
import { addUser } from "../controller/users.controller";
// import { editeMovie } from "../controller/admin.controller";

const router = Router();

//router.get("/home", getAllMovies);

router.get("/",fullDbMovies)
router.post('/addM', addMovie)
router.get('/detail/:id', getMovieId)
router.post('/newU', addUser)
// router.patch('/movies/edit/:id', editeMovie)




export default router;
