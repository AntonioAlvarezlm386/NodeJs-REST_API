import { Role } from '../models/Role.js'

export const createRoles = async () => {
try {
    const count = await Role.count()
    if(count > 0 ) return;

    const values = await Promise.all([
        Role.create({
            name: 'user'
        }),
        Role.create({
            name: 'moderator'
        }),
        Role.create({
            name: 'admin'
        })
    ])
} catch (error) {
    return console.error(error.message)
}
}