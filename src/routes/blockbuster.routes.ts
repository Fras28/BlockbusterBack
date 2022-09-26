import { Router } from "express";
import { addMovie, fullDbMovies, getMovieId} from "../controller/blockbuster.controller";
import { addUser } from "../controller/users.controller";
import { fullDBComments, addComment } from "../controller/comments.controller"
//import {getUserById} from "../controller/admin.controller"


const router = Router();



//GET ALL MOVIES
router.get("/",fullDbMovies)

//GET BY ID
router.get('/detail/:id', getMovieId)

//GET COMMENTS
router.get("/allComments", fullDBComments)

//router.get("/findUser", getUserById)

//POSTS MOVIE
router.post('/addM', addMovie)

//POST USER
router.post('/newU', addUser)

//POST COMMENTS
router.post('/detail/:id', addComment)





export default router;
