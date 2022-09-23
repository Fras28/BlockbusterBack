import { DataTypes, Model, Optional } from "sequelize";
import sequelizeConnection from "../db";
import Blockbuster from "./Blockbuster.model";
import Users from "./Users.model";

interface UsersMovieAttributes {
    id?: number;
    blockbusterId?: number;
    usersId?: number;
    createdAt?: Date;
    updateAt?: Date;
    deleteAt?: Date;
}

export interface UsersMovieInput extends Optional<UsersMovieAttributes, 'id'>{}
export interface UserMovieOutput extends UsersMovieInput{}

class UsersMovies extends Model<UsersMovieAttributes, UsersMovieInput> implements UsersMovieAttributes{
    public id!: number;
    public blockbusterId!: number;
    public usersId!: number;

    // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;
}

UsersMovies.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    blockbusterId: {
        type: DataTypes.INTEGER,
        references: {
            model: Blockbuster,
            key: 'id'
        }
    },
    usersId: {
        type: DataTypes.INTEGER,
        references: {
            model: Users,
            key: 'id'
        }
    }
},{
    sequelize: sequelizeConnection
}
)

export default UsersMovies;