import {Request, Response} from 'express'
import {User} from '../models/userSchema'
import {Cart} from '../models/cartSchema'
import bcrypt from 'bcrypt'

export const createUser = async (req: Request, res: Response) => {
  try {
    const {username, email, password, confirmPassword, rol} = req.body

    if (!username || !email || !password)
      return res.status(400).json('incomplete data')
    if (password !== confirmPassword) return res.status(400).json('bad data')

    const hashedPassword = await bcrypt.hash(
      password,
      Number(process.env.SALT_ROUNDS)
    )

    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
      rol,
    })

    await Cart.create({userId: newUser.id})

    res.status(200).json(newUser)
  } catch (err) {
    res.status(400).json(err.message)
  }
}

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find()

    res.json(users)
  } catch (err) {
    res.json(err)
  }
}

export const updateUser = async (req: Request, res: Response) => {
  try {
  } catch (err) {
    res.json(err.message)
  }
}

export const deleteUser = async (req: Request, res: Response) => {
  const {uid} = req.params

  try {
    const deletedUser = await User.findByIdAndDelete(uid)

    res.json(`the user ${deletedUser.email} was successfully deleted`)
  } catch (err) {
    res.json(err.message)
  }
}
