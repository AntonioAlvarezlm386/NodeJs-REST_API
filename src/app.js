/**
 * Aca configuramos la aplicación
 */

/* Para requerir express en nuestro proyecto podemos usar los commonJs de NodeJS */
//const express = require ('express')

/**Pero para usar código moderno mejor se ES Modulos (si tenemos instalado una versión de node superior a la 16)
 * -> Ademas hay que agregar "type": "module", en el archivo package.json
*/

import productsRoutes from './routes/products.routes.js'
import express  from "express"
import morgan from 'morgan'

const app = express();

/** to save values on express variabless */
//app.set('pkg', pkg)

//middlewares

/** To use json format */
app.use(express.json())
app.use(morgan('dev'))


app.use('/api/products', productsRoutes)

app.use((req, res, next) => {
    res.status(404).json({
        message: 'endpoint Not Found'
    })
})

export default app;