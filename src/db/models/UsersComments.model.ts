import { DataTypes, Model, Optional } from "sequelize";
import sequelizeConnection from "../db";
import Comments from "./Coments.model";
import Users from "./Users.model";

interface UsersCommentsAttributes {
    id?: number;
    commentsId?: number;
    usersId?: number;
    createdAt?: Date;
    updateAt?: Date;
    deleteAt?: Date;
}

export interface UsersCommentsInput extends Optional<UsersCommentsAttributes, 'id'>{}
export interface UsersCommentsOutput extends UsersCommentsInput{}

class UsersComments extends Model<UsersCommentsAttributes, UsersCommentsInput> implements UsersCommentsAttributes{
    public id!: number;
    public commentsId!: number;
    public usersId!: number;

    // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;
}

UsersComments.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    commentsId: {
        type: DataTypes.INTEGER,
        references: {
            model: Comments,
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

export default UsersComments;
