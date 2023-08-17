import {Request, Response, NextFunction} from 'express'
import jwt from 'jsonwebtoken'

interface Payload {
  id: string
  email: string
}

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.get('Authorization')

    if (!token || !token.toLowerCase().startsWith('bearer')) {
      return res.json('no token provided')
    }

    const decoded = jwt.verify(
      token?.substring(7),
      process.env.JWT_SW || ''
    ) as Payload

    req.params.userId = decoded?.id

    next()
  } catch (err) {
    res.json('se va para el catch')
  }
}

export default verifyToken
