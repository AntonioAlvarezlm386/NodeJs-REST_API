import { Role } from "../models/Role.js"

export const rolesChecker = async (req, res, next) => {

try {
    let isRolesValid = true;
    if(req.body.roles){
        const rawRoles = await Role.findAll()
        const roles = rawRoles.map( role => {
            return role.name
        })
        
        req.body.roles.forEach( role => {
            if(!roles.includes(role)){
                isRolesValid = false
            }
        })
    }
    if(!isRolesValid){
        return res.status(401).json({message: 'verify the sending roles'})
    } else{
        next()
    }
} catch (error) {
    return res.status(500).json({message: error.message})
}
}