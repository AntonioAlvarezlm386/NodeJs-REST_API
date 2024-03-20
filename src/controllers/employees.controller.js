import { pool } from '../db.js'

export const getEmployees = async (req, res) => {
    const [ rows ] = await pool.query('SELECT * FROM employee')
    res.json(rows)
}

export const getEmployee = async (req, res) => {
    /**Se obtienen los parametros de la url */
    const id = req.params.id
    const [ rows ] = await pool.query('SELECT * FROM employee WHERE id = ?', [ id ])
    
    
    if (rows.length <= 0){
        return res.status(404).json({message: "Employee not found"})
    } else {
        return res.json(rows[0])
    }

}

export const createEmployees = async (req, res) => {
    const { name, salary } = req.body;

    /**Aquí podrían ir las validaciones */

    const [rows] = await pool.query('INSERT INTO employee (name, salary) VALUES (?, ?)', [name, salary])
    /**Se coloca en tre llaves para que lo devuelva como un objeto json */
    res.send({ 
        id: rows.insertId,
        name,
        salary
     })
}

export const deleteEmployees = async (req, res) => {
    const [ result ] = await pool.query('DELETE FROM employee WHERE id = ?', [ req.params.id ])
    
    if (result.affectedRows <= 0){
        return res.status(404).json({
            message: 'employee not found'
        })
    }

    res.sendStatus(204)
}

export const updateEmployees = async (req, res) => {
    const {id} = req.params
    const {name, salary}  = req.body
    const [result] = await pool.query('UPDATE employee SET name = IFNULL(?, name), salary = IFNULL( ?, salary) WHERE id = ?', [ name, salary, id])

    if(result.affectedRows == 0 ){
        return res.status(404).json({
            message: 'employee not found'
        })
    }

    const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [id])
    res.json(rows[0])
}