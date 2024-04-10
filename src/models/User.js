import { sequelize } from "../db/db.js";
import { DataTypes } from "sequelize";
import bcrypt from 'bcryptjs'

export const User = sequelize.define(
    'users',
    {   
        username : {
            type: DataTypes.STRING,
            primaryKey: true
        },
        email:{
            type: DataTypes.STRING,
            unique: true
        },
        password: {
            type: DataTypes.STRING
        }
    }, {
        timestamps: true
    }
)

/** Hash password */
User.beforeCreate( async (user, options) => {
    const salt = await bcrypt.genSalt(10)
    user.password = await bcrypt.hash(user.password, salt)
})


/** Compare password */
User.prototype.comparePassword = async function (password){
    return await bcrypt.compare(password, this.password)
}