import { Product } from "../models/Product.js";


/** get all the products */
export const getProducts = async(req, res) => {
  try {
    const products = await Product.findAll()
    res.json(products)
  } catch (error) {
    return res.status(500).json({message: error.message})
  }
};


/** Gets a singles product */
export const getProductById = async(req, res) => {
  const {id} = req.params

  try {
    const product = await Product.findOne({
      where: {
        id
      }
  })
  
  res.json(product)
  } catch (error) {
    return res.status(500).json({message: error.message})
  }
};


/** Creates a product */
export const createProduct = async (req, res) => {
  const { name, category, price, imgURL } = req.body
  try {
    const newProduct = await Product.create({
      name,
      category,
      price,
      imgURL
    });
    res.status(201).json(newProduct)
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};



/** Deletes a product */
export const deleteProduct = async(req, res) => {
  const {id} = req.params

  try {
    await Product.destroy({
      where: {
        id
      }
    })
    res.sendStatus(204)
  } catch (error) {
    return res.status(500).json({message: error.message})
  }
};


/** Update a product data */
export const updateProduct = async (req, res) => {
  const {id} = req.params
  const { name, category, price, imgURL } = req.body

  try {
    const product = await Product.findOne({
      where: {
        id
      }
    })
    product.set(req.body)
    product.save()
    res.json(product)

  } catch (error) {
    return res.status(500).json({message: error.messages})
  }
};
