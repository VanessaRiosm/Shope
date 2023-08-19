import {Request, Response, NextFunction} from 'express'
import {User} from '../models/userSchema'

const verifyRol = async (req: Request, res: Response, next: NextFunction) => {
  const {userId} = req.params

  try {
    const user = await User.findById(userId)

    if (user && user.rol === 'admin') next()
    else res.status(401).json('Unauthorized')
  } catch (err) {
    res.json(err.message)
  }
}

export default verifyRol
