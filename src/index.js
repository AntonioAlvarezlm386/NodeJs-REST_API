/* Para requerir express en nuestro proyecto podemos usar los commonJs de NodeJS */
//const express = require ('express')

/**Pero para usar código moderno mejor se ES Modulos (si tenemos instalado una versión de node superior a la 16)
 * -> Ademas hay que agregar "type": "module", en el archivo package.json
*/
import express  from "express"
import employeesRoutes from './routes/employees.routes.js'
import indexRoutes from './routes/index.routes.js'

const app = express();

/**Para poder interpretar el cuerpo en formato json de la petición */
app.use(express.json())

app.use(indexRoutes)
app.use('/api', employeesRoutes);

app.listen(3000);
console.log("server running on port 3000")

