import {Request, Response} from 'express'
import jwt from 'jsonwebtoken'
import {User} from '../models/userSchema'

export const login = async (req: Request, res: Response) => {
  try {
    const {email, password} = req.body

    const findUser = await User.findOne({email: email})
    if (findUser) {
      if (findUser.password === password) {
        const payload = {
          id: findUser.id,
          email: email,
        }
        console.log('find user', findUser)
        const token = jwt.sign(payload, process.env.JWT_SW || '')

        console.log('token', token)
        return res.json({token})
      }
    }
    res.json('no user found')
  } catch (err) {
    res.json(err)
  }
}

// export const verifyUser = async (req: Request, res: Response) => {
//   try {
//     const {userId} = req.params

//     const userInfo = User.findById(userId)

//     res.json(userInfo)
//   } catch (err) {
//     res.json(err)
//   }
// }
