import {Request, Response} from 'express'
import {User} from '../models/userSchema'

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find()

    res.json(users)
  } catch (err) {
    res.json(err)
  }
}

export const createUser = async (req: Request, res: Response) => {
  try {
    const {name, picture, email, password, rol} = req.body

    if (!name || !email || !password)
      return res.status(400).json('incomplete data')

    const newUser = await User.create({name, picture, email, password, rol})

    res.json(newUser)
  } catch (err) {
    res.json(err)
  }
}
