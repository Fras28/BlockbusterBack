import { json } from "body-parser";
import { DataTypes, Model } from "sequelize";
import sequelizeConnection from "../db";

interface FavAttributes {
  id?: number;
  idUser: number;
  idMovie: number;
}

class fav extends Model<FavAttributes> {
  public id!: number;
  public idUser!: number;
  public idMovie!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}

fav.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    idUser: { type: DataTypes.INTEGER },
    idMovie: { type: DataTypes.INTEGER },
  },
  { sequelize: sequelizeConnection, paranoid: true }
);

export default fav;
