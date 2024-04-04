

 export const getProducts = (req, res) => {
    res.send('obteniedo productos')
 }

 export const getProductById = (req, res) => {

 }

 export const createProduct = (req, res) => {
   console.log(req.body) 
   res.json('Creando productos, v1')

 }

 export const deleteProduct = (req, res) => {

 }

 export const updateProduct = (req, res) => {

 }