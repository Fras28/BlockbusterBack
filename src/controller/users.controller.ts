import { Request, Response } from "express";
import users from "../db/models/users.model";
import { UserService } from "../services/user.service";

export const usersService = new UserService(new users());

//CREAR USUARIO
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


export const deletUser = async (req: Request, res: Response) => {
  const {id} = req.body;
  try{
    await usersService.deletUser(id);
    res.status(200).send("User deleted successfully");
  }catch(e){
    res.status(400).send("User not found");
  }
}

//POSTA PARA CAMBIO DE FOTO
export const editUser = async (req: Request, res: Response) => {
  const { name, lastname, date, id } = req.body;
  try {
    let editUser = await usersService.changePic(name, lastname, id);
    let edited = await usersService.getUserId(id)
    res.status(200).send(edited);
  } catch (e) {
    res.status(404).send("Something went wrong with your change👎​");
  }
};

