import Users from "../db/models/Users.model";



type User = {
    name: string;
    lastname: string;
    nickname: string;
    picture: string;
    email: string;
  };

  export class userService {
    constructor(private userModel: Users) {}
    //-------------Crear Usuario --------
    async insertUser(user: User) {
        console.log(user)
        return await Users.create(user, { validate: true });
      }
}