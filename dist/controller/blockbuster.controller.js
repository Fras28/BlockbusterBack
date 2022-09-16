"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const blockbuster_model_1 = __importDefault(require("../db/models/blockbuster.model"));
const blockbuster_service_1 = require("../services/blockbuster.service");
const BDcontroller_1 = require("./BDcontroller");
const router = (0, express_1.Router)();
const blockbusterService = new blockbuster_service_1.BlockbusterService(new blockbuster_model_1.default());
router.get("/home", BDcontroller_1.getAllMovies);
router.get("/", BDcontroller_1.fullDbMovies);
// router.post();
exports.default = router;
