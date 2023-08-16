import {Request, Response} from 'express'
import {Product} from '../models/productSchema'

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find()

    res.json(products)
  } catch (err) {
    res.json(err)
  }
}

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
