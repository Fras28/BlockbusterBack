import { Request, Response} from "express";
import Users from "../db/models/Users.model";
import { UserService } from "../services/user.service"

export const usersService = new UserService(new Users());

export const addUser = async (req:Request, res: Response) => {
    console.log(req);
    try {
      const dbUser = await usersService.insertUser(req.body);
      console.log(dbUser);
      return res.status(200).send(dbUser);
    } catch (e) {
      return res.status(400).send(e);
    }}