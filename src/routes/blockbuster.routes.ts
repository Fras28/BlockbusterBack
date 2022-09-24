import { Router } from "express";
import { addMovie, fullDbMovies, getMovieId} from "../controller/blockbuster.controller";
import { addUser } from "../controller/users.controller";
import { fullDBComments } from "../controller/comments.controller"


const router = Router();



//GET ALL MOVIES
router.get("/",fullDbMovies)

//GET BY ID
router.get('/id/:id', getMovieId)

//POSTS MOVIE
router.post('/addM', addMovie)

//POST USER
router.post('/newU', addUser)

//POST COMMENTS
router.post("/commets", fullDBComments)





export default router;
