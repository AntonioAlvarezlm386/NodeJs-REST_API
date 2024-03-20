/**Archivo de conexion a mysql */

import { createPool } from 'mysql2/promise'

export const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: '(Antonio2579)',
    port: 3306,
    database: 'companydb'
})