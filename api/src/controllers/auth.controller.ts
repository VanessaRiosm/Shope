import {Request, Response} from 'express'
import jwt from 'jsonwebtoken'
import {User} from '../models/userSchema'
import bcrypt from 'bcrypt'

export const login = async (req: Request, res: Response) => {
  try {
    const {email, password} = req.body

    const findUser = await User.findOne({email: email})
    if (findUser) {
      const pass = await bcrypt.compare(password, findUser.password)

      if (pass) {
        const payload = {
          id: findUser.id,
          email: email,
        }

        const token = jwt.sign(payload, process.env.JWT_SW || '')
        return res.json({token})
      }
    }
    res.json('no user found')
  } catch (err) {
    res.json(err)
  }
}

export const verifyUser = async (req: Request, res: Response) => {
  try {
    const {userId} = req.params

    const userInfo = await User.findById(userId).populate('cart')

    res.json(userInfo)
  } catch (err) {
    res.json(err)
  }
}
