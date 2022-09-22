import { Request, Response } from "express";
import Users from "../db/models/Users.model";
import { UserService } from "../services/user.service";

export const usersService = new UserService(new Users());

export const addUser = async (req: Request, res: Response) => {
  console.log(req);
  try {
    const dbUser = await usersService.insertUser(req.body);
    console.log(dbUser);
    return res.status(200).send(dbUser);
  } catch (e) {
    return res.status(400).send(e);
  }
};
export const afterPay = async (req: Request, res: Response) => {
  const { category, id } = req.body;
  try {
    if (category === "silver") {
      await usersService.defineCategory(category, id);
      res
        .status(200)
        .send(
          `thank you for the suscription, now you have ${category} memership 🥈​​ `
        );
    }
    if (category === "gold") {
      await usersService.defineCategory(category, id);
      res
        .status(200)
        .send(
          `thank you for the suscription, now you have ${category} memership 🥇​ `
        );
    }
  } catch (e) {
    res.status(404).send("something went rong whit the suscription 👎​");
  }
};
export const picProfile = async (req: Request, res: Response) => {
  const { pic, id } = req.body;
  try {
    await usersService.changePic(pic, id);
    res.status(200).send("Succsesfuly change 👍​");
  } catch (e) {
    res.status(404).send("something went rond with the change👎​");
  }
};
