import { sequelize } from "../db/db.js";
import { DataType, DataTypes } from "sequelize";

export const User = new sequelize.define(
    'users',
    {
        id : {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email:{
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        }
    }
)