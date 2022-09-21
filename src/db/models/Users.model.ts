import { json } from "body-parser";
import {  DataTypes, Model } from "sequelize";
import sequelizeConnection from "../db";

interface UsersAttributes {
  id?: number;
  name: string;
  lastname: string;
  nickname: string;
  picture:string;
  email:string;
}

class Users extends Model<UsersAttributes> {
  public id!: number;
  public name!: string;
  public lastname!: string;
  public nickname!: string;
  public picture!: string;
  public email!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}

Users.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement:true,
      primaryKey:true
    },
   name:{
    type:DataTypes.STRING
   },
   lastname:{
    type:DataTypes.STRING,
},
nickname:{
  type:DataTypes.STRING,
},
picture:{
  type:DataTypes.STRING,
},
email:{
  type:DataTypes.STRING,
},
  },
  { sequelize: sequelizeConnection, paranoid: true }
);

export default Users;