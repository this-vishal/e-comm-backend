const Product = require('../Models/ProductModel')

//   Add Products

const addProducts = async (req, res) => {
  try {
    const response = await Product.create({ ...req.body })
    if (response) {
      return res.status(201).json({
        status: 'success',
        message: 'Product added successfully',
        data: {
          response
        }
      })
    } else {
      return res.status(422).json({
        status: 'error',
        message: 'Unprocessable Entity. Please check your input.',
        data: {
          errors: {}
        }
      })
    }
  } catch (error) {
    return res.status(500).json({
      status: 'error',
      message: 'Internal Server Error. Please try again later.',
      data: null
    })
  }
}

const getAllProducts = (req, res) => {}

const getProductById = (req, res) => {}

const updateProductById = (req, res) => {}

const deleteProductById = (req, res) => {}

const deleteAllProducts = (req, res) => {}

module.exports = {
  addProducts,
  getAllProducts,
  getProductById,
  updateProductById,
  deleteProductById,
  deleteAllProducts
}
