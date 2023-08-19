import {Request, Response} from 'express'
import {Product} from '../models/productSchema'

export const createProduct = async (req: Request, res: Response) => {
  try {
    const {name, image, price, category, description} = req.body

    if (!name || !image || !price || !category || !description)
      return res.status(400).json('incomplete data')

    const newProduct = await Product.create({
      name,
      image,
      price,
      category,
      description,
    })

    res.json(newProduct)
  } catch (err) {
    res.json(err)
  }
}

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find()

    res.json(products)
  } catch (err) {
    res.json(err)
  }
}

export const getProductDetails = async (req: Request, res: Response) => {
  const {id} = req.params
  try {
    const product = await Product.findById(id)

    res.json(product)
  } catch (err) {
    res.json(err.message)
  }
}

export const updateProduct = async (req: Request, res: Response) => {
  try {
  } catch (err) {
    res.json(err.message)
  }
}

export const deleteProduct = async (req: Request, res: Response) => {
  const {pid} = req.params

  try {
    const product = await Product.findByIdAndDelete(pid)

    if (product) res.json('the product was successfully deleted')
    else res.json('no product provided')
  } catch (err) {
    res.json(err.message)
  }
} 
