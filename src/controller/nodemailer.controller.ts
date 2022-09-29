import { transporter } from "../nodemailer";
import { Request, Response } from "express";
import users from "../db/models/users.model";
import { UserService } from "../services/user.service";

export const usersService = new UserService(new users());
const emails = usersService.getAllUsersEmail();

export const nodemailer = async (req: Request, res: Response) => {
  try {
    (await emails).forEach((e) => {
      transporter.sendMail({
        from: '"BLOCKBUSTER" <blockbusterpf@gmail.com>', 
        to: e, 
        subject: "BLOCKBUSTER PF",
        text: "Welcome to Blockbuster experience! Hope you to enjoy it!!!",
      });
    }); res.send("Email sended succefuly")
  } catch (e) {
    console.log(e);
  }
};
