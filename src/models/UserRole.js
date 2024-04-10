import { sequelize } from "../db/db.js";
import { User } from "./User.js";
import { Role } from "./Role.js";


export const UserRole = sequelize.define(
    'userRole',
    {}, {
        timestamps: false
    }
) 


/** Relaciones */

User.belongsToMany(Role, {
    through: UserRole
})

Role.belongsToMany(User, {
    through: UserRole
})