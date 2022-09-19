import { Router } from "express";
import BLockbusterController from "./blockbuster.controller";

const router = Router();

router.use("/movies", BLockbusterController);

export default router;
