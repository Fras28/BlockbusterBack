import Users from "../db/models/Users.model";
import { Request, Response } from "express";
import { AdminService } from "../services/admin.service";

const adminService = new AdminService(new Users());

export const banUser = async (req: Request, res: Response) => {
  const { id } = req.body;
  try {
    await adminService.banUser(id);
    res.status(200).send("User baned successfully");
  } catch (e) {
    res.status(404).send("User not found");
  }
};
export const desBanUser = async (req: Request, res: Response) => {
  const { id } = req.body;
  try {
    await adminService.desBanUser(id);
    res.status(200).send("Reactivated user successfully");
  } catch (e) {
    res.status(404).send("User not found");
  }
};

export const newAdmin = async (req: Request, res: Response) => {
  const { idUser } = req.body;
  try {
    await adminService.defineAdmin(idUser);
    res.status(200).send(`Now this id=${idUser} works as Admin `);
  } catch (e) {
    res.status(404).send(`this function don't work`);
  }
};

export const newMovie = async (req: Request, res: Response) => {
  const infoNewMovie = req.body;
  try {
    await adminService.addMovie(infoNewMovie);
    res.status(200).send(`movie: ${infoNewMovie.name}  added successfully👍`);
  } catch (e) {
    res.status(400).send("something went rong whit this Movie");
  }
};
export const removeMovie = async (req: Request, res: Response) => {
  const idMovie = req.body;
  try{
    await adminService.deletMovie(idMovie)
    res.status(200).send("The movie was perfectry deleted")
  }catch(e){ res.status(400).send("something went rong whit this Movie ​🎦​")}
}
export const suspendMovie = async (req: Request, res: Response) => {
    const idMovie = req.body;
    try{
        await adminService.suspendMovie(idMovie)
        res.status(200).send("The movie was perfectry suspended 💤​")
    }catch(e){res.status(400).send("something went rong whit this suspension ​🖕​​")}
  }
