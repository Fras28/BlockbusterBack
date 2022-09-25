"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const blockbuster_controller_1 = require("../controller/blockbuster.controller");
const users_controller_1 = require("../controller/users.controller");
const comments_controller_1 = require("../controller/comments.controller");
const router = (0, express_1.Router)();
//GET ALL MOVIES
router.get("/", blockbuster_controller_1.fullDbMovies);
//GET BY ID
router.get('/detail/:id', blockbuster_controller_1.getMovieId);
//POSTS MOVIE
router.post('/addM', blockbuster_controller_1.addMovie);
//POST USER
router.post('/newU', users_controller_1.addUser);
//POST COMMENTS
router.post('/detail/:id', comments_controller_1.fullDBComments);
exports.default = router;
