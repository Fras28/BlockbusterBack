import { DataType, DataTypes, Model, ModelStatic, Optional } from "sequelize";
import sequelizeConnection from "../db";

interface BlockbusterAttributes {
  id: number;
  name: string;
  year: number;
  genre: string;
}

class Blockbuster extends Model<BlockbusterAttributes> {
  public id!: number;
  public name!: string;
  public year!: number;
  public genre!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}

Blockbuster.init(
  {
      id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    genre: {
      type: DataTypes.STRING,
    },
  },
  { sequelize: sequelizeConnection, paranoid: true }
);

export default Blockbuster;
