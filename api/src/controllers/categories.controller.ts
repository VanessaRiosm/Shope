import {Request, Response} from 'express'
import {Product} from '../models/productSchema'

export const getCategories = async (req: Request, res: Response) => {
  const {category} = req.query

  if (category) {
    try {
      const filterProducts = await Product.find({category})

      return res.status(200).json(filterProducts)
    } catch (err) {
      res.status(400).json(err.message)
    }
  } else {
    res.status(400).json('no info was sent')
  }
}
