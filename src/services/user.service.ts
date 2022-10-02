import { strict } from "assert";
import Users from "../db/models/users.model";

type Category = "user" | "silver" | "gold";

export type User = {
  id: number;
  name: string;
  lastname: string;
  nickname: string;
  picture: string;
  email: string;
  age:string
  status: boolean;
  category: Category;
};

export class UserService {
  constructor(private userModel: Users) {}
  //-------------Crear Usuario --------
  
  async insertUser(user: User) {
    user.status = true;     
    user.category = "user"
    console.log(user)
    const insertedUser = await Users.create(user, { validate: true });
    return insertedUser;
  }

  
  async defineCategoryGold(id: number) {
    let userX = await Users.update({ category: "gold" }, { where: { id } });
    return userX;
  }

  
  async defineCategorySilver(id: number) {
    let userX = await Users.update({ category: "silver" }, { where: { id } });
    return userX;
  }

  
  async changePic(name: string, date: string, lastname:string, id: number) {
    let userX = await Users.update({ name, date, lastname }, { where: { id } });
    return userX;
  }


  async getUserId(id: number) {
    let userX = await Users.findOne({ where: { id } });
    return userX;
  }

  
  async getAllUsersEmail (){
    let emailUser = await Users.findAll();
    let mapMail = emailUser.map((e)=> e.email)
     return mapMail
  }
  async newFav(idMovie:number,idUser:number){
    let newARR= await Users.findAll({ where: { id :idUser} })
    if(newARR[0].fav)
    newARR[0].fav.push(idMovie)
    let newFavList = await Users.update({fav:newARR[0].fav  }, { where: { id:idUser } });

    return  newFavList
  }

}
