import { Router } from "express";
import { addMovie, fullDbMovies, getMovieId} from "../controller/blockbuster.controller";
import { addUser, editUser } from "../controller/users.controller";
import { fullDBComments, addComment, byIdComments, byIdCommentsUser, deleteComments, editComments } from "../controller/comments.controller"
import {  bannComments, bannUser, fullUsers, getUser, newAdmin, removeMovie, unBannUser} from "../controller/admin.controller"
const router = Router();

//------------------------------------- GETS DE MOVIES--------------------------------

//GET ALL MOVIES
router.get("/",fullDbMovies)

//GET BY ID MOVIES
router.get('/detail/:id', getMovieId)

//------------------------------------ GETS DE COMMENTS--------------------------------

//GET COMMENT ID USER
router.get("/commentUser", byIdCommentsUser)

//GET COMMENT ID MOVIES
router.get("/comments", byIdComments)

//GET COMMENTS
router.get("/allComments", fullDBComments)

//----------------------------------- POSTS DE COMMENTS--------------------------------

//POST COMMENTS
router.post('/detail/:id', addComment)

//DELETE COMMENT
router.delete('/detail/:id', deleteComments)

//DELETE COMMENT
router.put('/editComment', editComments)

//----------------------------------- POSTS/PUT DE USERS--------------------------------

//CREAR USER--> el modelo de users(esta en ds en Info-Back)
router.post('/newU', addUser)

//CREAR USER--> el modelo de users(esta en ds en Info-Back, name, lastname, date)
router.put('/editU', editUser)


//----------------------------------- GETS DE ADMIN--------------------------------

//GET ALL USERS--> para slect de todos los usuarios
router.get("/users", fullUsers)

//GET USER BY EMAIL--> necesito email por params en string
router.get("/Uemail/:email", getUser)

//----------------------------------- POSTS/PUTS DE ADMIN  PARA USERS--------------------------------

//BANN USER--> necesito id(numerico) por body
router.put("/bannUser", bannUser)

//UNBANN USER--> necesito id(numerico) por body
router.put("/unBannUser", unBannUser)

//CREATE NEW ADMIN--> necesito id(numerico) por body
router.put("/createAdm", newAdmin)

//------------------------------------- POSTS/PUTS DE MOVIES BY ADMIN-------------------------------

//DELE MOVIE--> necesito id(numerico) por body
router.put("/removeM", removeMovie)

//POSTS MOVIE--> el modelo de blockbusters(esta en ds en Info-Back)
router.post('/addM', addMovie)

//------------------------------------- POSTS/PUTS DE COMMENTS BY ADMIN-------------------------------

//BANN COMMENT
router.put("/bannComments", bannComments)

export default router;


