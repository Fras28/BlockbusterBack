import { json } from "body-parser";
import { DataTypes, Model, Optional } from "sequelize";
import sequelizeConnection from "../db";


interface ComentsAttributes {
  id?: number;
  idMovie?: number;
  idUser?: number; 
  name: string;
  nickname: string;
  coment: string;
  picture: string;
  status: boolean;
}

class comments extends Model<ComentsAttributes> {
  public id!: number;
  public name!: string;
  public nickname!: string;
  public coment!: string;
  public picture!: string;
  public status!: boolean;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}

comments.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    nickname: {
      type: DataTypes.STRING,
    },
    coment: {
      type: DataTypes.STRING(300),
    },
    picture: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.BOOLEAN,
    },
  },
  { sequelize: sequelizeConnection, paranoid: true }
);


export default comments;
