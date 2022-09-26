"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const blockbuster_controller_1 = require("../controller/blockbuster.controller");
const users_controller_1 = require("../controller/users.controller");
const comments_controller_1 = require("../controller/comments.controller");
//import {getUserById} from "../controller/admin.controller"
const router = (0, express_1.Router)();
//GETS/POSTS MOVIES
//GET ALL MOVIES
router.get("/", blockbuster_controller_1.fullDbMovies);
//GET BY ID MOVIES
router.get('/detail/:id', blockbuster_controller_1.getMovieId);
//POSTS MOVIE
router.post('/addM', blockbuster_controller_1.addMovie);
//router.get("/findUser", getUserById)
//GETS/POSTS COMMENTS
//GET COMMENT ID USER
router.get("/commentUser", comments_controller_1.byIdCommentsUser);
//GET COMMENT ID MOVIES
router.get("/comments", comments_controller_1.byIdComments);
//GET COMMENTS
router.get("/allComments", comments_controller_1.fullDBComments);
//POST COMMENTS
router.post('/detail/:id', comments_controller_1.addComment);
//POST USER
router.post('/newU', users_controller_1.addUser);
//DELETE COMMENT
router.delete('/detail/:id', comments_controller_1.deleteComments);
exports.default = router;
