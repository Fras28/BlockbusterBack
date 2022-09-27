// import { DataTypes, Model, Optional } from "sequelize";
// import sequelizeConnection from "../db";
// import blockbuster from "./blockbuster.model";
// import users from "./users.model";

// interface UsersMovieAttributes {
//     id?: number;
//     blockbusterId?: number;
//     usersId?: number;
//     createdAt?: Date;
//     updateAt?: Date;
//     deleteAt?: Date;
// }

// export interface UsersMovieInput extends Optional<UsersMovieAttributes, 'id'>{}
// export interface UserMovieOutput extends UsersMovieInput{}

// class usersMovies extends Model<UsersMovieAttributes, UsersMovieInput> implements UsersMovieAttributes{
//     public id!: number;
//     public blockbusterId!: number;
//     public usersId!: number;

//     // timestamps!
//     public readonly createdAt!: Date;
//     public readonly updatedAt!: Date;
//     public readonly deletedAt!: Date;
// }

// usersMovies.init({
//     id: {
//         type: DataTypes.INTEGER,
//         autoIncrement: true,
//         primaryKey: true,
//     },
//     blockbusterId: {
//         type: DataTypes.INTEGER,
//         references: {
//             model: blockbuster,
//             key: 'id'
//         }
//     },
//     usersId: {
//         type: DataTypes.INTEGER,
//         references: {
//             model: users,
//             key: 'id'
//         }
//     }
// },{
//     sequelize: sequelizeConnection
// }
// )

// export default usersMovies;
