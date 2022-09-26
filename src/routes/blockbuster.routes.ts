import { Router } from "express";
import { addMovie, fullDbMovies, getMovieId} from "../controller/blockbuster.controller";
import { addUser } from "../controller/users.controller";
import { fullDBComments, addComment, byIdComments, byIdCommentsUser, deleteComments } from "../controller/comments.controller"
//import {getUserById} from "../controller/admin.controller"


const router = Router();

//GETS/POSTS MOVIES

//GET ALL MOVIES
router.get("/",fullDbMovies)

//GET BY ID MOVIES
router.get('/detail/:id', getMovieId)

//POSTS MOVIE
router.post('/addM', addMovie)


//router.get("/findUser", getUserById)

//GETS/POSTS COMMENTS


//GET COMMENT ID USER
router.get("/commentUser", byIdCommentsUser)

//GET COMMENT ID MOVIES
router.get("/comments", byIdComments)

//GET COMMENTS
router.get("/allComments", fullDBComments)

//POST COMMENTS
router.post('/detail/:id', addComment)

//POST USER
router.post('/newU', addUser)

//DELETE COMMENT
router.delete('/detail/:id', deleteComments)

export default router;
