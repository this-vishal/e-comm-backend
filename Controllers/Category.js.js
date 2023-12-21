const Category = require('../Models/CategoryModel')

const categoriesData = [
  { categoryTitle: 'Electronics' },
  { categoryTitle: 'Groceries' },
  { categoryTitle: 'Phones' },
  { categoryTitle: 'Cosmetics' },
  { categoryTitle: 'Clothes' },
  { categoryTitle: 'Home Accessories' }
  // Add more categories as needed
]

const addCategory = async (req, res) => {
  try {
    const response = await Category.create(req.body)
    // const response = await Category.bulkCreate(categoriesData)

    if (response) {
      return res.status(201).json({
        status: 'success',
        message: 'Category added successfully',
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

const updateCategory = (req, res) => {}

const deleteAllCategory = (req, res) => {}

const deleteCategory = (req, res) => {}

module.exports = {
  addCategory
}
