import {Request, Response} from 'express'
// import {User} from '../models/userSchema'

export const addToCart = async (req: Request, res: Response) => {
  try {
    res.json('')
  } catch (err) {
    res.json(err.message)
  }
}

export const removeFromCart = async (req: Request, res: Response) => {
  try {
    res.json('')
  } catch (err) {
    res.json(err.message)
  }
}
