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


  async defineCategory(category: Category, id: number) {
    let userX = await Users.update({ category }, { where: { id } });
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

}
