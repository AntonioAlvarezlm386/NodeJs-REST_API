import { sequelize } from "../db/db.js";
import { DataTypes } from 'sequelize'

export const Product = sequelize.define(
    'products',
    {
        id : {
            type : DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name:{
            type: DataTypes.STRING
        },
        category: {
            type: DataTypes.STRING
        },
        price: {
            type: DataTypes.DECIMAL
        },
        imgURL: {
            type: DataTypes.STRING
        }
    }
)

