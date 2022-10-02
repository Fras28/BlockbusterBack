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

export const addFav = async(req: Request, res: Response) => {
  const {idMovie,idUser} = req.body;
  try{
    const newFav = await usersService.newFav(idMovie,idUser)
    res.status(200).send(newFav)
  }catch(e){
    res.status(404).send("bad request")
  }
}





//ASIGNAR CATEGORIA
// export const afterPay = async (req: Request, res: Response) => {
//   const { category, id } = req.body;
//   try {
//     if (category === "silver") {
//       await usersService.defineCategory(category, id);
//       res
//         .status(200)
//         .send(
//           `thank you for the suscription, now you have ${category} memership 🥈​​ `
//         );
//     }
//     if (category === "gold") {
//       await usersService.defineCategory(category, id);
//       res
//         .status(200)
//         .send(
//           `thank you for the suscription, now you have ${category} memership 🥇​ `
//         );
//     }
//   } catch (e) {
//     res.status(404).send("something went rong whit the suscription 👎​");
//   }
// };

//POSTA PARA CAMBIO DE FOTO
export const editUser = async (req: Request, res: Response) => {
  const { name, lastname, date, id } = req.body;
  try {
    let editUser = await usersService.changePic(name, lastname, date, id);
    let edited = await usersService.getUserId(id)
    res.status(200).send(edited);
  } catch (e) {
    res.status(404).send("Something went wrong with your change👎​");
  }
};

