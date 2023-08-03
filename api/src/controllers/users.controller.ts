import {Request, Response} from 'express'
import {User} from '../models/userSchema'

export const createUser = async (req: Request, res: Response) => {
  try {
    const {name, picture, email, password, rol} = req.body

    if (!name || !email || !password)
      return res.status(400).json('incomplete data')

    const newUser = await User.create({name, email, password})

    res.json(newUser)
  } catch (err) {
    res.json(err)
  }
}
