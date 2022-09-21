import Users from "../db/models/Users.model";


 type Category =  "user" | "silver" | "gold" | "admin";

type User = {
  name: string;
  lastname: string;
  nickname: string;
  picture: string;
  email: string;
  status: boolean;
  category:Category;
};

export class UserService{
  constructor(private userModel: Users) {}
  //-------------Crear Usuario --------
  async insertUser(user: User) { 
    const insertedUser = await Users.create(user, { validate: true });
    return insertedUser  }
  async defineCategory(category: Category, id: number) {
    let userX =   await Users.update({ category }, { where: { id } });
    return userX;
  }
  async banUser(status: boolean, id: number) {
    let userX = await Users.update({ status }, { where: { id } });
    return userX;
  }
}

