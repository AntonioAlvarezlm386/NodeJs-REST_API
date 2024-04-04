/**mysql connection */
import Sequelize from 'sequelize'
import { DB_HOST, DB_DATABASE, DB_USER, DB_PASSWORD } from '../config.js'

export const sequelize = new Sequelize(DB_DATABASE, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect: 'mysql'
})