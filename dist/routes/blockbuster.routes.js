"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const blockbuster_controller_1 = require("../controller/blockbuster.controller");
const users_controller_1 = require("../controller/users.controller");
const comments_controller_1 = require("../controller/comments.controller");
const admin_controller_1 = require("../controller/admin.controller");
const nodemailer_controller_1 = require("../controller/nodemailer.controller");
const router = (0, express_1.Router)();
//------------------------------------- GETS DE MOVIES--------------------------------
//GET ALL MOVIES
router.get("/", blockbuster_controller_1.fullDbMovies);
//GET BY ID MOVIES
router.get('/detail/:id', blockbuster_controller_1.getMovieId);
//------------------------------------ GETS DE COMMENTS--------------------------------
//GET COMMENT ID USER
router.get("/commentUser", comments_controller_1.byIdCommentsUser);
//GET COMMENT ID MOVIES
router.get("/comments", comments_controller_1.byIdComments);
//GET COMMENTS
router.get("/allComments", comments_controller_1.fullDBComments);
//----------------------------------- POSTS DE COMMENTS--------------------------------
//POST COMMENTS
router.post('/detail/:id', comments_controller_1.addComment);
//DELETE COMMENT
router.delete('/detail', comments_controller_1.deleteComments);
//DELETE COMMENT
router.put('/editComment', comments_controller_1.editComments);
//----------------------------------- POSTS/PUT DE USERS--------------------------------
//CREAR USER--> el modelo de users(esta en ds en Info-Back)
router.post('/newU', users_controller_1.addUser);
//CREAR USER--> el modelo de users(esta en ds en Info-Back, name, lastname, date)
router.put('/editU', users_controller_1.editUser);
//----------------------------------- GETS DE ADMIN--------------------------------
//GET ALL USERS--> para slect de todos los usuarios
router.get("/users", admin_controller_1.fullUsers);
//GET USER BY EMAIL--> necesito email por params en string
router.get("/Uemail/:email", admin_controller_1.getUser);
//----------------------------------- POSTS/PUTS DE ADMIN  PARA USERS--------------------------------
//BANN USER--> necesito id(numerico) por body
router.put("/bannUser", admin_controller_1.bannUser);
//UNBANN USER--> necesito id(numerico) por body
router.put("/unBannUser", admin_controller_1.unBannUser);
//CREATE NEW ADMIN--> necesito id(numerico) por body
router.put("/createAdm", admin_controller_1.newAdmin);
//------------------------------------- POSTS/PUTS DE MOVIES BY ADMIN-------------------------------
//SUSPEND MOVIE--> necesito id(numerico) por body
router.put("/removeM", admin_controller_1.suspMovie);
//POSTS MOVIE--> el modelo de blockbusters(esta en ds en Info-Back)
router.post('/addM', blockbuster_controller_1.addMovie);
//------------------------------------- POSTS/PUTS DE COMMENTS BY ADMIN-------------------------------
//BANN COMMENT
router.put("/bannComments", admin_controller_1.bannComments);
//------------------------------------- NODEMAILER-------------------------------
//SEND SPAM WELCOME EMAILS TO CLIENTS
router.get("/nodemailer", nodemailer_controller_1.nodemailer);
exports.default = router;
