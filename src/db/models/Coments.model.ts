import { json } from "body-parser";
import {  DataTypes, Model } from "sequelize";
import sequelizeConnection from "../db";

interface ComentsAttributes {
  id?: number;
  name: string;
  nickname: string;
  coment:string;
  picture:string;
}

class Comments extends Model<ComentsAttributes> {
  public id!: number;
  public name!: string;
  public nickname!: string;
  public coment!: string;
  public picture!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;
}

Comments.init(
  {
      id: {
      type: DataTypes.INTEGER,
      autoIncrement:true,
      primaryKey:true
    },
    name:{
        type:DataTypes.STRING,
        primaryKey:true
    },
    nickname:{
        type:DataTypes.STRING,
        primaryKey:true
    },
    coment:{
        type:DataTypes.STRING(300),
        primaryKey:true
    },
    picture:{
        type:DataTypes.STRING,
        primaryKey:true
    },

  },
{ sequelize: sequelizeConnection, paranoid: true }
);

export default Comments;