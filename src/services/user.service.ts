import Users from "../db/models/Users.model";

type Category = "user" | "silver" | "gold";

type User = {
  name: string;
  lastname: string;
  nickname: string;
  picture: string;
  email: string;
  status: boolean;
  category: Category;
};

export class UserService {
  constructor(private userModel: Users) {}
  //-------------Crear Usuario --------
  async insertUser(user: User) {
    const insertedUser = await Users.create(user, { validate: true });
    return insertedUser;
  }
  async defineCategory(category: Category, id: number) {
    let userX = await Users.update({ category }, { where: { id } });
    return userX;
  }
  async changePic(picture: string, id: number) {
    let userX = await Users.update({ picture }, { where: { id } });
    return userX;
  }
}
