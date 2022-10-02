import { json } from "body-parser";
import { DataTypes, Model } from "sequelize";
import sequelizeConnection from "../db";

interface UsersAttributes {
  id?: number;
  name: string;
  lastname: string;
  nickname: string;
  date?: string;
  picture: string;
  email: string;
  status: boolean;
  category: string;
  fav?:number[];
}

class users extends Model<UsersAttributes> {
  public id!: number;
  public name!: string;
  public lastname!: string;
  public nickname!: string;
  public date!: string
  public picture!: string;
  public email!: string;
  public status!: boolean;         
  public category!: string;
  public fav!: number[];

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}

users.init(
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
    date: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.BOOLEAN,
    },
    category: {
      type: DataTypes.STRING,
    },
    fav: {
      type:DataTypes.ARRAY(DataTypes.NUMBER),
    },
  },
  { sequelize: sequelizeConnection, paranoid: true }
);

export default users;
