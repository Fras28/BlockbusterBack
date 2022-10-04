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
  age: string;
  status: boolean;
  category: Category;
};

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

  async defineCategorySilver(id: number) {
    let userX = await Users.update({ category: "silver" }, { where: { id } });
    return userX;
  }

  async deletUser(id: number) {
    let deletUser = Users.destroy({ where: { id } });
    return deletUser;
  }

  async changePic(name: string, lastname: string, id: number) {
    let userX = await Users.update({ name, lastname }, { where: { id } });
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

}
