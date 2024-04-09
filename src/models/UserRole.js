import { DataTypes } from "sequelize";
import { sequelize } from "../db/db.js";
import { User } from "./User.js";
import { Role } from "./Role.js";


export const UserRole = sequelize.define(
    'userRole',
    {
        userId : {
            type: DataTypes.STRING
        },
        roleId: {
            type: DataTypes.INTEGER
        }
    }, {
        timestamps: false
    }
) 


/** Relaciones */

User.belongsToMany(Role, {
    through: UserRole,
    foreignKey: 'username',
    otherKey: 'name'
})

Role.belongsToMany(User, {
    through: UserRole,
    foreignKey: 'name',
    otherKey: 'username'
})