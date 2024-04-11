import { Role } from "../models/Role.js"
import { User } from "../models/User.js"

export const dbDuplicate = async (req, res, next) => {
    const dbUser = await User.findOne({
        where: {
            username: req.body.username
        }
    })
    if(dbUser) {
        return res.status(400).json({message: 'user already exists'})
    }


    const dbEmail = await User.findOne({
        where: {
            email: req.body.email
        }
    })

    if(dbEmail){
        return res.status(400).json({
            message: 'email already exists'
        })
    }

    next()
} 


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