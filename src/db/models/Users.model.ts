import { json } from "body-parser";
import { DataTypes, Model } from "sequelize";
import sequelizeConnection from "../db";

interface UsersAttributes {
  id?: number;
  name: string;
  lastname: string;
  nickname: string;
  picture: string;
  email: string;
  status: boolean;
  category: string;
}

class Users extends Model<UsersAttributes> {
  public id!: number;
  public name!: string;
  public lastname!: string;
  public nickname!: string;
  public picture!: string;
  public email!: string;
  public status!: boolean;         
  public category!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}

Users.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    lastname: {
      type: DataTypes.STRING,
    },
    nickname: {
      type: DataTypes.STRING,
    },
    picture: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.BOOLEAN,
    },
    category: {
      type: DataTypes.STRING,
      // .ENUM("user", "silver", "gold", "admin"),
      // defaultValue: "user",
    },
  },
  { sequelize: sequelizeConnection, paranoid: true }
);
// season:{
// type: DataTypes.ENUM("summer", "autumn","winter","spring")},
export default Users;
