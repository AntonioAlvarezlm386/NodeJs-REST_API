/**
 * ACÁ CONFIGURAMOS LA APLICACIÓN
 */

/* Para requerir express en nuestro proyecto podemos usar los commonJs de NodeJS 
const express = require ('express')

Pero para usar código moderno mejor usar ESMódulos (si tenemos instalado una versión de node superior a la 16)
*/

import productsRoutes from './routes/products.routes.js'
import authRoutes from './routes/auth.routes.js'
import userRoutes from './routes/user.routes.js'
import { createRoles } from './libs/initialSetup.js'
import express  from "express"
import morgan from 'morgan'
import { endpointNotFound } from './middlewares/middlewares.js';

const app = express();
createRoles() // Creates initial roles

//middlewares
app.use(express.json())         // json format
app.use(morgan('dev'))          //reports

app.use('/api/products', productsRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/users', userRoutes)

app.use(endpointNotFound)

export default app; 