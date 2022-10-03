import { strict } from "assert";
import Users from "../db/models/users.model";
import favMovies from "../db/models/favMovie.model"

type Category = "user" |"transition"| "silver" | "gold";

export type User = {
  id: number;
  name: string;
  lastname: string;
  nickname: string;
  picture: string;
  email: string;
  age: string;
  status: boolean;
  category: Category;
};

export type Fav = {
  id?:number;
  idUser:number;
  idMovie:number;
}

export class UserService {
  constructor(private userModel: Users) {}
  //-------------Crear Usuario --------

  async insertUser(user: User) {
    user.status = true;
    user.category = "user";
    console.log(user);
    const insertedUser = await Users.create(user, { validate: true });
    return insertedUser;
  }

  async defineCategoryGold(id: number) {
    let userX = await Users.update({ category: "gold" }, { where: { id } });
    return userX;
  }
  
  async defineCategoryTanction(id: number) {
    let userX = await Users.update({ category: "transition" }, { where: { id } });
    return userX;
  }

  async defineCategorySilver(id: number) {
    let userX = await Users.update({ category: "silver" }, { where: { id } });
    return userX;
  }

  async deletUser(id: number) {
    let deletUser = Users.destroy({ where: { id } });
    return deletUser;
  }

  async changePic(name: string, date: string, lastname: string, id: number) {
    let userX = await Users.update({ name, date, lastname }, { where: { id } });
    return userX;
  }

  async getUserId(id: number) {
    let userX = await Users.findOne({ where: { id } });
    return userX;
  }

  async getAllUsersEmail() {
    let emailUser = await Users.findAll();
    let mapMail = emailUser.map((e) => e.email);
    return mapMail;
  }


  async newFav(idMovie: number, idUser: number) {
    let newARR:Array<Fav> = await favMovies.findAll({ where: { idUser: idUser } });
    let arrFav = newARR.filter(e => e.idMovie === idMovie )
    const ojbeto = {idMovie,idUser}
    if(!arrFav.length){
     const lista =  await favMovies.create(ojbeto, { validate: true })
      return lista
    }  if(arrFav.length) {
         let arrNoFav = await favMovies.destroy({ where: { id: arrFav[0].id } });
         return arrNoFav;
     }else throw new Error
  }
  async listFav(){
    const listMovies = await favMovies.findAll()
    return listMovies
  }
}