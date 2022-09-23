"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const blockbuster_controller_1 = require("../controller/blockbuster.controller");
const users_controller_1 = require("../controller/users.controller");
// import { editeMovie } from "../controller/admin.controller";
const router = (0, express_1.Router)();
//router.get("/home", getAllMovies);
router.get("/", blockbuster_controller_1.fullDbMovies);
router.post('/addM', blockbuster_controller_1.addMovie);
router.get('/detail/:id', blockbuster_controller_1.getMovieId);
router.post('/newU', users_controller_1.addUser);
// router.patch('/movies/edit/:id', editeMovie)
exports.default = router;
