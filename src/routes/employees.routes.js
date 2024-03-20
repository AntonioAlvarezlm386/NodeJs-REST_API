/**Importamos el modulo router de expres, que es el equivalente a "app" */
import { Router } from "express";
import {
    getEmployees,
    getEmployee,
    createEmployees,
    deleteEmployees,
    updateEmployees
} from '../controllers/employees.controller.js'
 
const router = Router()

router.get('/employees', getEmployees)

router.get('/employees/:id', getEmployee)

router.post('/employees', createEmployees)

router.delete('/employees/:id', deleteEmployees)

/**Si usamos PUT es para actualizar todo, PATCH para actualizar parcialmente este dato */
router.patch('/employees/:id', updateEmployees)

export default router;