import { Request, Response, Router } from "express";
import Blockbuster from "../db/models/blockbuster.model";
import { BlockbusterService } from "../services/blockbuster.service";

const router = Router();

const blockbusterService = new BlockbusterService(new Blockbuster());

router.get("/", async (req: Request, res: Response) => {
  try {
    const result = await blockbusterService.getAll();
    return res.status(200).send(result);
  } catch (e) {
    return res.status(404).send("No hemos encontrado peliculas");
  }
});

// router.post();

export default router;
