import Blockbuster from "../db/models/Blockbuster.model";
import { BlockbusterService } from "../services/blockbuster.service";
import { Request, Response} from "express";
import Users from "../db/models/Users.model";
import { userService } from "../services/user.service";

const usersService = new userService(new Users());

export const addUser = async (req:Request, res: Response) => {
    console.log(req);
    try {
      const dbUser = await usersService.insertUser(req.body);
      console.log(dbUser);
      return res.status(200).send(dbUser);
    } catch (e) {
      return res.status(400).send(e);
    }}